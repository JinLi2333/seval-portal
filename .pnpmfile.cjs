// Whitelist: "package" can be only dependened on packages listed in "canBeDependedOn"
const allowList = [
  {
    "package": "@seval-portal/shared",
    "canBeDependedOn": ["@seval-portal/client", "@seval-portal/opg"]
  }
]

function readPackage(pkg) {
  const name = pkg.name;
  const dependencies = Object.keys(pkg.dependencies || {});
  // check if dependencies contains any of the packages in the allowList
  for (const dep of dependencies) {
    const restrictedPackage = allowList.find(p => p.package === dep);
    if (restrictedPackage && !restrictedPackage.canBeDependedOn.includes(name)) {
      console.log(`❌ Package "${name}" cannot depend on "${dep}"`);
    }
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  }
};
