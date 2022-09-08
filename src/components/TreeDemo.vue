<template>
  <div class="grid">
    <div class="col-12">
      <div class="card">
        <h5>Tree</h5>
        <Tree v-model:selectionKeys="selectedTreeValue" :value="treeValue" selectionMode="checkbox"></Tree>
      </div>
    </div>
    <div class="col-12">
      <div class="card">
        <h5>TreeTable</h5>
        <TreeTable v-model:selectionKeys="selectedTreeTableValue" :value="treeTableValue" selectionMode="checkbox">
          <template #header>
            FileSystem
          </template>
          <Column :expander="true" field="name" header="Name"></Column>
          <Column field="size" header="Size"></Column>
          <Column field="type" header="Type"></Column>
        </TreeTable>
      </div>
    </div>
  </div>
</template>

<script>
import NodeService from '../service/NodeService'

export default {
  data() {
    return {
      treeValue: null,
      selectedTreeValue: null,
      treeTableValue: null,
      selectedTreeTableValue: null,
    }
  },
  nodeService: null,
  created() {
    this.nodeService = new NodeService();
  },
  mounted() {
    this.nodeService.getTreeNodes().then(data => this.treeValue = data);
    this.nodeService.getTreeTableNodes().then(data => this.treeTableValue = data);
  },
}
</script>
