/**
 * ---------------------------------------
 * This demo was created using amCharts 4.
 * 
 * For more information visit:
 * https://www.amcharts.com/
 * 
 * Documentation is available at:
 * https://www.amcharts.com/docs/v4/
 * ---------------------------------------
 */

// Themes begin
am4core.useTheme(am4themes_animated);
// Themes end

var chart = am4core.create("chartdiv", am4plugins_wordCloud.WordCloud);
var series = chart.series.push(new am4plugins_wordCloud.WordCloudSeries());

series.accuracy = 4;
series.step = 15;
series.rotationThreshold = 0.7;
series.maxCount = 200;
series.minWordLength = 2;
series.labels.template.margin(4,4,4,4);
series.maxFontSize = am4core.percent(30);

series.text = "Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	Berkeley	BostonUniversity	BostonUniversity	BostonUniversity	BostonUniversity	BostonUniversity	BostonUniversity	Brandeis	Brown	Brown	Brown	Brown	Brown	Brown	Chicago	Chicago	Chicago	Chicago	Chicago	Chicago	Chicago	Clemson	CMU	CMU	CMU	CMU	CMU	CMU	CMU	CMU	ColorodoSchoolofMines	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Columbia	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	Cornell	CornellTech	CornellTech	CornellTech	Dartmouth	Dartmouth	Duke	Duke	GeorgeWashingtonUniversity	Georgetown	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GeorgiaTech	GraduateInstituteofGeneva	GWU	Harvard	Harvard	Harvard	HongKongBaptistUniversity	Icahn	JohnsHopkins	JohnsHopkins	JohnsHopkins	JohnsHopkins	JohnsHopkins	JohnsHopkins	JohnsHopkins	JohnsHopkins	KAUST	Lehigh	LoyolaUniversityChicago	Maryland	Michigan	Michigan	Michigan	Michigan	Michigan	Michigan	MIT	Northeastern-Seattle	Northwestern	Northwestern	Northwestern	Northwestern	Northwestern	Northwestern	Northwestern	Northwestern	Northwestern	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	NYU	Penn	Penn	Penn	Penn	Penn	Penn	Penn	Penn	Portland	Princeton	Purdue	Rice	Rice	Rice	Rochester	Rochester	SingaporeManagementUniversity	SingaporeUniversityofTechnologyandDesign	SouthCarolina	Stanford	Toronto	Toronto	Toronto	UCBerkeley	UCDavis	UCI	UCI	UCLA	UCLA	UCLA	UCLA	UCLA	UCLA	UCLA	UCSD	UCSD	UCSD	UCSD	UCSD	UCSD	UCSD	UCSD	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UIUC	UniversityofSouthCarolina	UniversityofVirginia	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	USC	UT-Austin	Vanderbilt	Virginia	Washington	Washington	Washington	Washington	Wisconsin-Madison	Wisconsin-Madison	Wisconsin-Madison	Worcester	Yale	Yale	Yale	Yale	Yale	Yale";
series.colors = new am4core.ColorSet();
series.colors.passOptions = {}; // makes it loop

//series.labelsContainer.rotation = 45;
series.angles = [0,-90];
series.fontWeight = "700"

setInterval(function () {
  series.dataItems.getIndex(Math.round(Math.random() * (series.dataItems.length - 1))).setValue("value", Math.round(Math.random() * 10));
 }, 10000)