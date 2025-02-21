module.exports = {
  hooks: {
    readPackage(pkg) {
      const restrictedDeps = {
        "@seval-portal/client": ["@seval-portal/shared"], // Restrict @org/model for @org/shared
      };

      if (restrictedDeps[pkg.name]) {
        const forbidden = restrictedDeps[pkg.name].filter((dep) =>
          Object.keys(pkg.dependencies || {}).includes(dep)
        );

        if (forbidden.length > 0) {
          throw new Error(
            `❌ Package "${pkg.name}" cannot depend on ${forbidden.join(", ")}`
          );
        }
      }

      return pkg;
    }
  }
};
