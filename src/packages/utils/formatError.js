export const formatError = (errors) =>
  Object.fromEntries(
    Object.entries(errors).map(([key, value]) => [key, value[0]])
  );