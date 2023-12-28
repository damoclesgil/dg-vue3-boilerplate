import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Button from './index.vue'

describe('Button', () => {
  it('renders button correctly with default slots', () => {
    const wrapper = mount(Button, { props: { color: 'primary' }, slots: { default: '<i>icon</i> Sign Up' } })

    expect(wrapper.html()).toContain('<i>icon</i> Sign Up')
  })
})
