-- Give the user table an email field. Store it in a string
DEFINE FIELD email ON TABLE user TYPE string
  -- Make this field required
  ASSERT $value != NONE
  -- Check if the value is a properly formatted email address
  AND is::email($value);