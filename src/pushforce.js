var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
});

var master = gitgraph.branch({
  name:"master",
  showLabel: true
});

gitgraph.commit();
var sharedFeature = master.branch({name: "sharedFeature", showLabel:true});

gitgraph.commit();

var feature1Color = "#ccc";
var feature2Color = "#ccf";

var myfeature1 = sharedFeature.branch({
  color:feature1Color,
  name:"myfeature1",
  showLabel: true
});
var myfeature2 = sharedFeature.branch({
  color:feature2Color,
  name:"hisfeature1",
  showLabel: true
});

myfeature1.commit({color:feature1Color, message: 'commit1'});
myfeature2.commit({color:feature2Color, message: 'commit2'});
myfeature1.commit({color:feature1Color, message: 'commit5'});
myfeature2.commit({color:feature2Color, message: 'commit6'});

myfeature1.merge(sharedFeature, {
  message: "Feature1 merged in release-1",
});
myfeature2.merge(sharedFeature, {
  message: "Feature2 merged in release-1",
});

sharedFeature.merge(master, "Feature1 merged in master");



var badgitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "gitGraph2"
});

var badmaster = badgitgraph.branch({
  name:"master",
  showLabel: true
});

badmaster.commit();
var sharedFeature = badmaster.branch({name: "sharedFeature", showLabel:true});
sharedFeature.commit();

var feature1Color = "#ccc";
var feature2Color = "#ccf";

var myfeature1 = sharedFeature.branch({
  color:feature1Color,
  name:"myfeature1",
  showLabel: true
});

var myfeature2 = sharedFeature.branch({
  color:feature2Color,
  name:"hisfeature1",
  showLabel: true
});

myfeature1.commit({color:feature1Color, message: 'commit1'});
myfeature1.commit({color:feature2Color, message: 'commit2'});
myfeature1.commit({color:feature1Color, message: 'commit5'});
myfeature1.commit({color:feature2Color, message: 'commit6'});

myfeature2.commit({color:feature2Color, message: 'commit2'});
myfeature2.commit({color:feature2Color, message: 'commit3'});
//
myfeature2.merge(sharedFeature, {
  message: "Feature2 merged in release-1",
});


myfeature2.commit({color:"#f00", message: 'commit7'});

myfeature2.merge(sharedFeature, {
  message: "Feature2 merged in release-1",
});

myfeature1.merge(sharedFeature, {
  message: "Feature1 merged in release-1",
});

sharedFeature.merge(badmaster, "Feature1 merged in master");
