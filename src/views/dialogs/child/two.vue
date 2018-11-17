<template>
  <div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="70%"
      append-to-body
      :before-close="handleClose">
      <div>
          <el-table
            ref="multipleTable"
            :data="tableData3"
            tooltip-effect="dark"
            style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="id" label="编号" width="120"></el-table-column>
            <el-table-column prop="name" label="姓名" show-overflow-tooltip>
            </el-table-column>
          </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="openModal">添加</el-button>
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>

      <component :is="modal" :injectData="localData" @close="handleCloseInner" @refresh="handleRefresh"></component>
    </el-dialog>
  </div>
</template>

<script>
import Three from './three'

export default {
  name: 'Two',
  components: {
    Three
  },
  data () {
    return {
      modal: null,
      localData: {},
      dialogVisible: true,
      tableData3: []
    }
  },
  methods: {
    openModal () {
      this.localData.list = this.tableData3
      this.modal = Three
    },
    // 选中的项目
    handleSelectionChange (item) {

    },
    handleClose () {
      this.dialogVisible = false
      this.$emit('close')
    },
    handleConfirm () {

    },
    handleCloseInner () {
      this.modal = null
    },
    handleRefresh (item) {
      item = item.map(cell => {
        cell.hasChoosed = true
        return cell
      })
      this.tableData3 = item
    }
  }
}
</script>
