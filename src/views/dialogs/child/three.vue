<template>
  <div>
    <el-dialog
      title="内部"
      :visible.sync="dialogVisible"
      width="50%"
      append-to-body
      :before-close="handleClose">
      <div>
        <el-table
          ref="innerTable"
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
        <el-button @click="toggleSelection">赋值</el-button>
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
const MockData = [
  {
    id: '1',
    name: '1'
  },
  {
    id: '2',
    name: '2'
  },
  {
    id: '3',
    name: '3'
  },
  {
    id: '4',
    name: '4'
  },
  {
    id: '5',
    name: '5'
  },
  {
    id: '6',
    name: '6'
  },
  {
    id: '7',
    name: '7'
  },
  {
    id: '8',
    name: '8'
  },
  {
    id: '9',
    name: '9'
  },
  {
    id: '10',
    name: '10'
  }
]

export default {
  name: 'Two',
  data () {
    return {
      modal: null,
      localData: {},
      dialogVisible: true,
      tableData3: [],
      selected: []
    }
  },
  created () {
    this.tableData3 = MockData
  },
  props: {
    injectData: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    init () {
      this.toggleSelection()
    },
    // 选中的项目
    handleSelectionChange (item) {
      this.selected = item
    },
    handleClose () {
      this.dialogVisible = false
      this.$emit('close')
    },
    handleConfirm () {
      this.handleClose()
      this.$emit('refresh', this.selected)
    },
    toggleSelection () {
      let rows = this.injectData.list
      let tableData3 = this.tableData3
      rows.map(item => {
        tableData3.map(cell => {
          if (item.id === cell.id) {
            this.$refs.innerTable.toggleRowSelection(cell)
          }
        })
      })
    }
  }
}
</script>
