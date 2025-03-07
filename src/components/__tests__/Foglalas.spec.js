import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import FoglalasView from '@/views/FoglalasView.vue'
import HomeView from '@/views/HomeView.vue'
import { useFoglalasStore } from '@/stores/idopontok'
import { createPinia, setActivePinia } from 'pinia'

describe('Foglalás', () => {  
  beforeEach(() =>{
    setActivePinia(createPinia())
  })
  it('foglalás betöltés', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Időpont foglalás')
  })
  it('store', async() =>{
    const wrapper = mount(HomeView)
    const store = useFoglalasStore()
    await wrapper.find("#napSelect").setValue("Hetfo")
    await wrapper.find("#hour").setValue(16)
    await wrapper.find("#button").trigger("click")
    expect(store.day).toBe("Hetfo")
    expect(store.hour).toBe(16)
  })
})
