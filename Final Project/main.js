var categories = [];
var results = [];
const app_id = '56d5f47f';
const api_key = '820965769151b19b12ad411b8349b336';

function fillSelection() {
	fetch(
		`https://api.data.charitynavigator.org/v2/Categories?app_id=${app_id}&app_key=${api_key}`,
		{
			headers: {
				Accept: 'application/json',
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((category) => {
				let result = {
					name: category.categoryName,
					causes: [...category.causes],
				};
				categories.push(result);
			});
		})
		.then(() => {
			var elm = document.getElementById('causes');
			categories.forEach((category) => {
				var optGroup = document.createElement('optgroup');
				optGroup.setAttribute('label', category.name);
				category.causes.forEach((cause) => {
					var option = document.createElement('option');
					var node = document.createTextNode(cause.causeName);
					option.setAttribute('value', cause.causeID);
					option.appendChild(node);
					optGroup.appendChild(option);
				});
				elm.appendChild(optGroup);
			});
		});
}

document.body.addEventListener('submit', async function (event) {
	event.preventDefault();
	var state = document.getElementById('state').value;
	var cause = document.getElementById('causes').value;

	// casting to any here to satisfy tsc
	// sending body as x-www-form-url-encoded
	const result = await fetch(
		`https://api.data.charitynavigator.org/v2/Organizations?app_id=${app_id}&app_key=${api_key}&pageSize=10&causeID=${cause}&state=${state}`,
		{
			headers: {
				Accept: 'application/json',
			},
		}
	)
		.then((response) => response.json())
		.then((data) => {
			data.forEach((org) => {
				let orgInfo = {
					name: org.charityName,
					mission: org.mission,
					website: org.websiteURL,
					location: { ...org.mailingAddress },
				};

				results.push(orgInfo);
			});
		})
		.then(() => console.log('Results :', results))
		.catch((error) => {
			console.error('Error:', error);
		});
});

fillSelection();
