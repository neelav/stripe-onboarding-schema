# stripe-onboarding-schema

A library that provides rich, opiniated type information about Stripe requirements surfaced via the account api's requirements hash. This library is intended for developers to build bespoke Express-like UIs with complete control over the rendering layer.

## Installation

[WIP] update once this package is in npm

## Usage

```
import {
  RequirementsConverter,
  DefaultEntityRegistry,
  RequirementsType,
  Country,
} from "stripe-onboarding-schema";

const entityRegistry = DefaultEntityRegistry.make();
const requirementsConverter = new RequirementsConverter(entityRegistry);

const requirementsSchema = requirementsConverter.convertRequirements(
    "acct_123abc",
    {}, // Set this to a requirements hash from a /v1/accounts api response
    RequirementsType.PAST_DUE
);
```

## Example

See https://github.com/neelav/stripe-onboarding-schema-example
