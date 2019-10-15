<script>
export default {
  name: 'upload',
  props: {
    action: {
      type: String,
      required: true
    },
    headers: Object,
    name: String,
    multiple: Boolean,
    onPreview: Function,
    onRemove: Function,
    beforeRemove: Function,
    limit: Number,
    onExceed: Function,
    fileList: Array
  },
  render: function(h) {
    let {
      name,
      multiple
    } = this
    return (
      <div class="el-upload el-upload--text">
        <input class="el-upload__input" 
          type="file" name={name}
          multiple={multiple} />
      </div>
    )
  }
}
</script>
