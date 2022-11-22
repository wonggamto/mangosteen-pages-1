import { defineComponent } from "vue";
import { RouterView } from "vue-router";
import style from './Welcome.module.scss'
import logo from '../assets/icons/logo.svg'
export const Welcome = defineComponent({
  setup: (props, context) => {
    return () => 
      <div class={style.wrapper}>
        <header>
            <img src={logo} />
            <h1>山竹记账</h1>
        </header>
        <main class={style.main}><RouterView /></main >
      </div>
  }, 
});
