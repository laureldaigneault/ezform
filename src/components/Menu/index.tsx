import {
  Dropdown,
  Menu as BaseMenu,
  MenuProps as BaseMenuProps,
  MenuItem as BaseMenuItem,
  menuItemClasses,
  useMenuButton,
} from '@mui/base';
import { BaseComponentProps } from '../../utils/types';
import { FC, useRef } from 'react';
import styled from 'styled-components';

export type MenuProps = BaseMenuProps &
  BaseComponentProps & { items: { label: string; disabled?: boolean; onClick?: () => void }[] };

const Wrapper: FC<any> = (props = {}) => {
  const { getRootProps: getButtonProps } = useMenuButton();

  return (
    <div {...props} {...getButtonProps()} style={{ display: 'contents', cursor: 'pointer' }}>
      {props.children}
    </div>
  );
};
const Menu: FC<MenuProps> = (props) => {
  const wrapperRef = useRef<any>();

  return (
    <div ref={wrapperRef} style={{ position: 'relative' }}>
      <Dropdown>
        <Wrapper>{props.children}</Wrapper>
        <BaseMenu
          slots={{ listbox: Listbox }}
          {...props}
          slotProps={{ root: { disablePortal: true, anchor: () => wrapperRef.current, style: { width: '100%' } } }}
          anchor={() => wrapperRef.current}>
          {(props.items || []).map((item) => {
            return (
              <MenuItem key={item.label} disabled={item.disabled} label={item.label} onClick={item.onClick}>
                {item.label}
              </MenuItem>
            );
          })}
        </BaseMenu>
      </Dropdown>
    </div>
  );
};

const Listbox = styled('ul')<MenuProps>(({ theme }) => {
  return {
    backgroundColor: theme.palette.background.default,
    top: theme.getSpacing(1),
    position: 'relative',
    boxShadow: theme.getShadow('projection'),
    ...theme.getTypographyStyle('field'),
    ...theme.getBorderStyle('field'),
    color: theme.palette.text.primary,
  };
});

export const MenuItem = styled(BaseMenuItem)(({ theme, ...props }) => {
  return {
    listStyle: 'none',
    padding: theme.getSpacing(1),
    outline: 'none',
    cursor: 'pointer',
    backgroundColor: theme.palette.background.default,

    ['&:hover']: {
      borderBottom: 'none',
      backgroundColor: theme.getColor(props.intent, { lighten: 10 }).hex,
    },

    ['&:last-of-type']: {
      borderBottom: 'none',
    },

    [`&.${menuItemClasses.focusVisible}`]: {
      ...theme.getActionStyle('focussed'),
    },

    [`&.${menuItemClasses.disabled}`]: {
      ...theme.getActionStyle('disabled'),
    },
  };
});

export default styled(Menu)<MenuProps>(() => {
  return {};
});
