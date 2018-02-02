import '../asset/style/footer.styl'
export default {
  data() {
    return {
      author: 'IK'
    }
  },
  render() {
    return (
      <div id='footer'>
        <span>Written by {this.author}</span>
      </div>
    )
  }
}