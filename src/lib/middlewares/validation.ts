import withJoi from "next-joi";

export default withJoi({
  onValidationError: (_, res) => {
    res.status(400).json({
      message: "Validation Error",
    });
  },
});
