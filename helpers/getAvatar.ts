export const generateAvatarFromName = (name: string): string => {
  return name.split(" ")[0].slice(0, 1) + "" + name.split(" ")[1].slice(0, 1);
};
