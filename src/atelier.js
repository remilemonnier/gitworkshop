var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
});

var master = gitgraph.branch({
  name:"master",
  showLabel: true
});

gitgraph.commit().commit().commit();
var release = master.branch({name: "release", showLabel:true});


var feature1Color = "#ccc";
var feature2Color = "#ccf";
var feature3Color = "#f0f";

var myfeature1 = master.branch({
  color:feature1Color,
  name:"myfeature1",
  showLabel: true
});
var myfeature2 = master.branch({
  color:feature2Color,
  name:"hisfeature1",
  showLabel: true
});
var myfeature3 = master.branch({
  color:feature3Color,
  name:"myfeature3",
  showLabel: true
});

myfeature1.commit({color:feature1Color});
myfeature2.commit({color:feature2Color});
myfeature2.commit({color:feature2Color});
myfeature3.commit({color:feature3Color});
myfeature1.commit({color:feature1Color});
myfeature2.commit({color:feature2Color});
myfeature3.commit({color:feature3Color});

myfeature1.merge(release, {
  message: "Feature1 merged in release-1",
});
myfeature2.merge(release, {
  message: "Feature2 merged in release-1",
});
myfeature3.merge(release, {
  message: "Feature3 merged in release-1",
});



release.merge(master, "Feature1 merged in master");


// Bad git workflow

var badgitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact",
  elementId: "gitGraph2"
});


var badMaster = badgitgraph.branch({
  name:"master",
  showLabel: true
});

badgitgraph.commit().commit().commit();
var release = badMaster.branch({name: "release", showLabel:true});


var feature1Color = "#ccc";
var feature2Color = "#ccf";
var feature3Color = "#f0f";

var myfeature1 = badMaster.branch({
  color:feature1Color,
  name:"myfeature1",
  showLabel: true
});


var myfeature2 = badMaster.branch({
  color:feature2Color,
  name:"hisfeature1",
  showLabel: true
});

myfeature1.commit({color:feature1Color});
myfeature2.commit({color:feature2Color});
myfeature2.commit({color:feature2Color});
myfeature1.commit({color:feature1Color});
myfeature2.commit({color:feature2Color});

var myfeature3 = myfeature1.branch({
  color:feature3Color,
  name:"myfeature3",
  showLabel: true
});
myfeature3.commit({color:feature3Color});
myfeature3.commit({color:feature3Color});


myfeature1.merge(release, {
  message: "Feature1 merged in release-1",
});
myfeature2.merge(release, {
  message: "Feature2 merged in release-1",
});
myfeature3.merge(release, {
  message: "Feature3 merged in release-1",
});

release.merge(badMaster, "Feature1 merged in master");
