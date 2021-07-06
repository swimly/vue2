import './src/button.css';
import style from './src/button.css.json'
export default {
  name: 'm-button',
  props: {
    type: {
      type: String,
      default: 'primary'
    }
  },
  methods: {
    onClick (e) {
      this.$emit('click', e)
    }
  },
  render (h) {
    return (
      <div onClick={this.onClick} class={style['m-button']} type={this.type}>
        <span class={style['m-button-label']}>{this.$slots.default}</span>
      </div>
    )
  }
}