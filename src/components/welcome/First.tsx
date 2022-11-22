import { defineComponent } from 'vue';
import style from './First.module.scss';
import pig from '../../assets/icons/pig.svg';
import { RouterLink } from 'vue-router';
export const First = defineComponent({
  setup: (props, context) => {
    return () => (
    <div class={style.wrapper}>
        <div class={style.card}>
            <img class={style.pig} src={pig}  />
            <h2>会挣钱<br/>还要会省钱</h2>
        </div>
        <div class={style.actions}>
            <RouterLink class={style.block} to='/welcome/2'>跳过</RouterLink>
            <RouterLink to='/welcome/2'>下一页</RouterLink>
            <RouterLink to='/start'>跳过</RouterLink>
        </div>
    </div>
    )
  }
})