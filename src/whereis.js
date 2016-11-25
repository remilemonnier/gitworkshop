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
gitgraph.commit().commit().commit();
gitgraph.commit().commit().commit();
gitgraph.commit().commit().commit();
