import type { IconAliases, IconSet } from 'vuetify'
import MdiCalendar from 'virtual:icons/mdi/calendar'
import MdiChevronUp from 'virtual:icons/mdi/chevron-up'
import MdiCheck from 'virtual:icons/mdi/check'
import MdiCloseCircle from 'virtual:icons/mdi/close-circle'
import MdiClose from 'virtual:icons/mdi/close'
import MdiCheckboxMarked from 'virtual:icons/mdi/checkbox-marked'
import MdiCheckboxBlankOutline from 'virtual:icons/mdi/checkbox-blank-outline'
import MdiRadioboxMarked from 'virtual:icons/mdi/radiobox-marked'
import MdiRadioboxBlank from 'virtual:icons/mdi/radiobox-blank'
import MdiMenuDown from 'virtual:icons/mdi/menu-down'
import MdiChevronDown from 'virtual:icons/mdi/chevron-down'

export const aliases = <IconAliases>{
  /* custom ones */
  email: MdiCalendar,
  /* vuetify aliases */
  collapse: MdiChevronUp,
  complete: MdiCheck,
  cancel: MdiCloseCircle,
  close: MdiClose,
  delete: MdiCloseCircle,
  // delete (e.g. v-chip close)
  clear: MdiCloseCircle,
  success: 'mdi:check-circle',
  info: 'mdi:information',
  warning: 'mdi:alert-circle',
  error: MdiCloseCircle,
  prev: 'mdi:chevron-left',
  next: 'mdi:chevron-right',
  checkboxOn: MdiCheckboxMarked,
  checkboxOff: MdiCheckboxBlankOutline,
  checkboxIndeterminate: 'mdi:minus-box',
  delimiter: 'mdi:circle',
  // for carousel
  sortAsc: 'mdi:arrow-up',
  sortDesc: 'mdi:arrow-down',
  expand: MdiChevronDown,
  menu: 'mdi:menu',
  subgroup: MdiMenuDown,
  dropdown: MdiMenuDown,
  radioOn: MdiRadioboxMarked,
  radioOff: MdiRadioboxBlank,
  edit: 'mdi:pencil',
  ratingEmpty: 'mdi:star-outline',
  ratingFull: 'mdi:star',
  ratingHalf: 'mdi:star-half-full',
  loading: 'mdi:cached',
  first: 'mdi:page-first',
  last: 'mdi:page-last',
  unfold: 'mdi:unfold-more-horizontal',
  file: 'mdi:paperclip',
  plus: 'mdi:plus',
  minus: 'mdi:minus',
  calendar: MdiCalendar,
  $checkboxOn: MdiCheckboxMarked,
  $checkboxOff: MdiCheckboxBlankOutline,
}

export const unpluginIcons = <IconSet>{
  // @ts-expect-error Parameter props implicitly has an any type.
  component: (props) => {
    // eslint-disable-next-line no-console
    console.log(props)
    const { icon, tag, ...rest } = props
    const stringIcon = icon as string
    return h(tag, rest, [
      h(aliases[stringIcon] ?? icon, {
        key: stringIcon,
        ...rest,
      }),
    ])
  },
}
