import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import FoglalasView from '@/views/FoglalasView.vue'
import HomeView from '@/views/HomeView.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('Foglalás', () => {  
  beforeEach(() =>{
    setActivePinia(createPinia())
  })
  it('foglalás betöltés', () => {
    const wrapper = mount(HomeView)
    expect(wrapper.text()).toContain('Időpont foglalás')
  })
  it('HomeView értékek', async() =>{
    const wrapper = mount(HomeView)
    await wrapper.find("#napSelect").setValue("Hetfo")
    await wrapper.find("#hour").setValue(16)
    await wrapper.find("#button").trigger("click") 
    expect(wrapper.vm.day).toBe("Hetfo")
    expect(wrapper.vm.hourValue).toBe(16)
  })
  it('FoglalasView értékek', async() =>{
    const wrapper = mount(FoglalasView)
    await wrapper.find("#nev").setValue("Krumplibogár Kevin")
    await wrapper.find("#tSzam").setValue("+36304566789")
    await wrapper.find("#button").trigger("click")
    expect(wrapper.vm.nev).toBe("Krumplibogár Kevin")
    expect(wrapper.vm.tSzam).toBe("+36304566789")
  })
})
