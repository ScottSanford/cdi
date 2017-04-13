angular.module('cdiApp').factory('Text', function(){

	var subText = [
		{
			name: "Alzheimer's Disease", 
			id: '3575aa8e8dcc467594486ba95c6fe2aeproduct330824', 
			bkgImg: 'common/images/alzheimers/background.jpg', 
			navStatic: 'common/images/home/alzheimers-static.jpg', 
			navHover: 'common/images/home/alzheimers-hover.png',
			listOne: [
				{item: 'Mild cognitive impairment (MCI)'},
				{item: 'Memory Loss'},
				{item: "Dementia / Alzheimer's disease"}
			],
			listTwoTitle: 'Help rule out mimics of dementia:',
			listTwo: [
				{item: 'Normal Aging'},
				{item: "Depression"},
				{item: 'Sleep issues'},
				{item: 'Anxiety'},
				{item: 'Medication'},
				{item: 'Alcohol'}
			]
		},
		{
			name: 'Epilepsy', 
			id: '3575aa8e8dcc467594486ba95c6fe2aeproduct330827', 
			bkgImg: 'common/images/epilepsy/background.jpg',
			navStatic: 'common/images/home/epilepsy-static.png', 
			navHover: 'common/images/home/epilepsy-hover.png',
			listOne: [
				{item: 'Temporal lobe epilepsy'}
			],
			listTwoTitle: 'Provide answers and options for patients:',
			listTwo: [
				{item: 'Confirm a diagnosis of temporal lobe epilepsy for patients experiencing seizures'},
				{item: 'Better planning for surgical canidates who are unresponsive to therapy and anti-epileptic drugs'}
			]
		},
		{
			name: 'Traumatic Brain Injury', 
			id: '3575aa8e8dcc467594486ba95c6fe2aeproduct330826', 
			bkgImg: 'common/images/tbi/background.jpg',
			navStatic: 'common/images/home/tbi-static.jpg', 
			navHover: 'common/images/home/tbi-hover.png', 
			listOne: [
				{item: 'Traumatic Brain Injury (TBI)'}			
			],
			listTwoTitle: 'Provide answers and options for patients:',
			listTwo: [
				{item: 'More definitive diagnosis for this "invisible injury"'},
				{item: 'Help determine severity of TBI to guide treatment'}
			]
		},
		{
			name: 'Multiple Sclerosis', 
			id: '3575aa8e8dcc467594486ba95c6fe2aeproduct330825', 
			bkgImg: 'common/images/ms/background.jpg',
			navStatic: 'common/images/home/ms-static.jpg', 
			navHover: 'common/images/home/ms-hover.png', 
			listOne: [
				{item: 'Early MS-related symptoms'},
				{item: 'Ongoing MS treatment plans'}
			],
			listTwoTitle: 'See early evidence of brain change to begin treatment early and monitor change over time.'
		}
	];

	return subText;

})