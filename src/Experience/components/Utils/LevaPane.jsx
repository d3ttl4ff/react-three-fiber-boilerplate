import { Leva } from 'leva';

const LevaPane = () => {
  const theme = {
    colors: {
      elevation1: '#40424add', // bg color of the root panel (main title bar)
      elevation2: '#28292eff', // bg color of the rows (main panel color)
      elevation3: '#40424a', // bg color of the inputs
      accent1: '#97989eff', // text box hover
      accent2: '#adafb8ff', // button, sliders, checkbox, joystick
      accent3: '#bbbcc4ff', // button hover
      highlight1: '#bbbcc4ff', // title bar foreground
      highlight2: '#bbbcc4ff', // label
      highlight3: '#28292eff', // button, checkbox text
      vivid1: '#ffcc00',
      folderWidgetColor: '#afb0b859',
      folderTextColor: '#fefefe',
      toolTipBackground: '#fefefe',
      toolTipText: '#28292eff',
    },
    radii: {
      xs: '2px',
      sm: '3px',
      lg: '6px',
    },
    space: {
      xs: '4px',
      sm: '4px',
      md: '8px',
      rowGap: '4px',
      colGap: '4px',
    },
    fonts: {
      mono: `monospace, 'Roboto Mono', 'Source Code Pro', Menlo, Courier`,
      sans: `system-ui, sans-serif`,
    },
    fontSizes: {
      root: '11px',
      toolTip: '$root',
    },
    sizes: {
      rootWidth: '280px',
      controlWidth: '160px',
      numberInputMinWidth: '48px', //38
      scrubberWidth: '10px',
      scrubberHeight: '12px',
      rowHeight: '22px',
      folderTitleHeight: '20px',
      checkboxSize: '16px',
      joystickWidth: '100px',
      joystickHeight: '100px',
      colorPickerWidth: '$controlWidth',
      colorPickerHeight: '100px',
      imagePreviewWidth: '$controlWidth',
      imagePreviewHeight: '100px',
      monitorHeight: '60px',
      titleBarHeight: '26px',
    },
    shadows: {
      level1: '0 0 2px 0 #00000033',
      level2: '0 4px 14px #00000033',
    },
    borderWidths: {
      root: '0px',
      input: '1px',
      focus: '1px',
      hover: '0.5px',
      active: '1px',
      folder: '1px',
    },
    fontWeights: {
      label: 'normal',
      folder: 'normal',
      button: 'bold',
    },
  };

  return (
    <>
      <style>
        {`
          .leva-c-PJLV {
            margin-top: 0 !important;
          }
      `}
      </style>
      <Leva theme={theme} titleBar={{ title: 'Tweaks', drag: false }} />
    </>
  );
};

export default LevaPane;
