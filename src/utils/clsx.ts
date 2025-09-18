type ClassValue = string | undefined | null | false | ClassDictionary | ClassArray;
type ClassDictionary = { [key: string]: string };
type ClassArray = ClassValue[];

const clsx = (...values: ClassValue[]): string => {
  const classes: string[] = [];

  values.forEach((value) => {
    if (!value) return;

    if (typeof value === 'string') {
      classes.push(value);
    } else if (Array.isArray(value)) {
      classes.push(clsx(...value));
    } else if (typeof value === 'object') {
      Object.entries(value).forEach(([key, value]) => {
        if (value) classes.push(key);
      });
    }
  });

  return classes.join(' ');
};

export default clsx;
