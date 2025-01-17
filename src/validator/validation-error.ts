export enum ValidationError {
  SchemaVersionRequired = "schema-version-required",
  SchemaVersionUnsupported = "schema-version-unsupported",
  ReservedTypeKeywords = "reserved-type-keywords",
  ReservedRelationKeywords = "reserved-relation-keywords",
  SelfError = "self-error",
  InvalidName = "invalid-name",
  MissingDefinition = "missing-definition",
  InvalidRelationType = "invalid-relation-type",
  InvalidType = "invalid-type",
  RelationNoEntrypoint = "relation-no-entry-point",
  TuplesetNotDirect = "tupleuset-not-direct",
  DuplicatedError = "duplicated-error",
  RequireSchema1_0 = "allowed-type-schema-10",
  AssignableRelationsMustHaveType = "assignable-relation-must-have-type",
  AllowedTypesNotValidOnSchema1_0 = "allowed-type-not-valid-on-schema-1_0",
  InvalidSchema = "invalid-schema",
  InvalidSyntax = "invalid-syntax",
  TypeRestrictionCannotHaveWildcardAndRelation = "type-wildcard-relation",
}
