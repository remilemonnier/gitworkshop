var gitgraph = new GitGraph({
  template: "metro",
  orientation: "horizontal",
  mode: "compact"
});

var master = gitgraph.branch({
  name:"master",
  showLabel: true
});
master.commit();

var production = master.branch({
  color:"#f00",
  name:"production",
  showLabel: true
});

var release = master.branch({name: "releaseXX", showLabel:true});


var feature1Color = "#ccc";
var feature2Color = "#ccf";
var feature3Color = "#f0f";
var hotfixColor = "#5f5";

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


release.merge(master, "Feature1 merged in master");

release.merge(production, "Feature1 merged in production");



var hotfix = production.branch({
  color:hotfixColor,
  name:"hotfix",
  showLabel: true
});
hotfix.commit({color:hotfixColor});


hotfix.merge(production, "hotfix merged in production");

production.merge(master, "hotfix merged in production");
