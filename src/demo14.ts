(() => {
  // 枚举可以做为值，也可以做为类型
  enum Roles {
    SUPER_ADMIN,
    ADMIN = 3,
    USER
  }
  console.log(Roles);
  enum str {
    A,
    B,
    C,
    D
  }
  type strUnion = keyof typeof str;
  const a: strUnion = 'A';
  console.log(a);
})();
