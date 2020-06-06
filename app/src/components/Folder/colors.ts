import ObjectType from '../../types/ObjectType';

type ColorType = {
  [key: string]: ObjectType;
};

const colors: ColorType = {
  yellow: { head: '#ff9f00', body: '#ffc928' },
  red: { head: '#fb3939', body: '#fe7676' },
  blue: { head: '#26aaf5', body: '#76f6ff' },
};

export default colors;
