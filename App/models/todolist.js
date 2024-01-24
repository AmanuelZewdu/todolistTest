module.exports = (mongoose) => {
  const Toodolist = mongoose.model(
    "user",
    mongoose.Schema(
      {
        title: String,
        description: String,
      },
      { timestamps: true }
    )
  );

  return User;
};
