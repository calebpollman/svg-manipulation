const getPaths = (input) => {
  let paths = input.filter((index) => {
    return index.path;
  });
  paths = paths[0].path[0];
  paths = paths.map((i, x) => {
    const attrs = i.attributes;
    return attrs;
  });

  return paths;
}

export default getPaths;
