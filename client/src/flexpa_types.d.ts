interface Amount {
  value?: number;
  currency?: string;
}

interface Benefit {
  id?: string;
  entry?: Entry[];
  [key: string]: unknown;
}

interface BillablePeriod {
  start?: string;
  end?: string;
}

interface Code {
  system?: string;
  code?: string;
  display?: string;
}

export interface Entry {
  fullUrl?: string;
  resource?: Resource;
  search?: Record<string, unknown>;
}

export interface FlexpaConfig {
  publishableKey: string;
  onSuccess: (publicToken: string) => Promise | unknown;
}

interface GenericBenefitObject {
  display?: string;
  [key: string]: unknown;
}

interface Identifier {
  use?: string;
  system?: string;
  value?: string;
}

export interface LinkExchangeResponse {
  accessToken: string;
  expiresIn: number;
}

interface Meta {
  versionId?: string;
  lastUpdated?: string;
  source?: string;
  tag: Record<string, unknown>[];
}

interface Resource {
  billablePeriod?: BillablePeriod;
  created?: string;
  facility?: GenericBenefitObject;
  id?: string;
  identifier?: Identifier[];
  insurance?: Record<string, unknown>[];
  insurer?: GenericBenefitObject;
  item?: Record<string, unknown>[];
  meta?: Meta;
  outcome?: string;
  patient?: Record<string, unknown>;
  payment?: Record<string, unknown>;
  Prescription?: GenericBenefitObject;
  provider?: GenericBenefitObject;
  resourceType?: string;
  status?: string;
  total?: Total[];
  type?: ResourceType;
  use?: string;
}

interface ResourceType {
  coding?: Code[];
  text?: string;
}

interface Total {
  category?: Record<string, unknown>;
  amount?: Amount;
}
