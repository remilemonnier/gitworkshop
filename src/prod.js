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
var release = master.branch({name: "releaseXX", showLabel:true});


var feature1Color = "#ccc";
var feature2Color = "#ccf";
var feature3Color = "#f0f";
var feature4Color = "#ff0";

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

myfeature1.commit({color:feature1Color});
myfeature2.commit({color:feature2Color});

myfeature1.merge(release, {
  message: "Feature1 merged in release-1",
});
myfeature2.merge(release, {
  message: "Feature2 merged in release-1",
});


var bugfix = release.branch({
  color:feature3Color,
  name:"bugfix1",
  showLabel: true
});
bugfix.commit({color:feature3Color});


bugfix.merge(release, "Bugfix1 merged in releaseXX");


var bugfix2 = release.branch({
  color:feature4Color,
  name:"bugfix2",
  showLabel: true
});
bugfix2.commit({color:feature4Color});


bugfix2.merge(release, "Bugfix2 merged in releaseXX");

release.merge(master, "Feature1 merged in master");


