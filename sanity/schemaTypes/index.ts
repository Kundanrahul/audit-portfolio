import { type SchemaTypeDefinition } from 'sanity'

// Imported schemas
import finding from '../lib/finding'
import contest from '../lib/contest'
import protocolShowcase from '../lib/protocolShowcase'
import midHeading from '../lib/midHeading'
import metrics from '../lib/metrics'

// Register
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [finding, contest, protocolShowcase, midHeading,metrics],
}

