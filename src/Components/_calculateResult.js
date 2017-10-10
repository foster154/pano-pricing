const defaultPricing = {
  customer: {
    '1500': 139,
    '2500': 169,
    '3500': 199,
    '4500': 249,
    interiorsOnly: -30,
    exteriorsOnly: 119,
    aerials: 149,
    virtualTour: 19,
    travelChargePerMile: 0.5
  },
  photographer: {
    '1500': 50,
    '2500': 65,
    '3500': 80,
    '4500': 105,
    interiorsOnly: -15,
    exteriorsOnly: 40,
    aerials: 100,
    virtualTour: 0,
    travelChargePerMile: 0.5
  },
  processor: {
    '1500': 25,
    '2500': 25,
    '3500': 25,
    '4500': 25,
    interiorsOnly: 0,
    exteriorsOnly: 25,
    aerials: 10,
    virtualTour: 0,
    travelChargePerMile: 0
  }
}

const newViewPricing = {
  customer: {
    '1500': 189,
    '2500': 219,
    '3500': 249,
    '4500': 299,
    interiorsOnly: -30,
    exteriorsOnly: 129,
    aerials: 149,
    virtualTour: 19,
    travelChargePerMile: 0.5
  },
  photographer: {
    '1500': 80,
    '2500': 95,
    '3500': 110,
    '4500': 135,
    interiorsOnly: -15,
    exteriorsOnly: 50,
    aerials: 100,
    virtualTour: 0,
    travelChargePerMile: 0.5
  },
  processor: {
    '1500': 35,
    '2500': 35,
    '3500': 35,
    '4500': 35,
    interiorsOnly: 0,
    exteriorsOnly: 25,
    aerials: 10,
    virtualTour: 0,
    travelChargePerMile: 0
  }
}

// this.state = {
//   homeSize: null,
//   mileage: '',
//   intExtOnly: '',
//   aerials: false,
//   virtualTour: false,
//   customPricing: ''
// }

function setPricingScheme(customPricing) {
  switch (customPricing) {
    case 'New View':
      return newViewPricing
    default:
      return defaultPricing
  }
}

function careAboutHomeSize(state) {
  return state.homeSize && state.intExtOnly !== 'exteriorsOnly'
}

export function calculateResult(state) {
  let customerResult = 0
  let photographerResult = 0
  let processorResult = 0

  const pricing = setPricingScheme(state.customPricing)

  // Home Size
  if (careAboutHomeSize(state)) {
    customerResult += pricing.customer[state.homeSize.toString()]
    photographerResult += pricing.photographer[state.homeSize.toString()]
    processorResult += pricing.processor[state.homeSize.toString()]
  }

  // Interiors only
  if (state.intExtOnly === 'interiorsOnly') {
    customerResult += pricing.customer.interiorsOnly
    photographerResult += pricing.photographer.interiorsOnly
    processorResult += pricing.processor.interiorsOnly
  }

  // Exteriors Only
  if (state.intExtOnly === 'exteriorsOnly') {
    customerResult += pricing.customer.exteriorsOnly
    photographerResult += pricing.photographer.exteriorsOnly
    processorResult += pricing.processor.exteriorsOnly
  }

  // Half off
  if (state.halfOff) {
    customerResult = Math.floor(customerResult / 2)
  }

  // Aerials
  if (state.aerials) {
    customerResult += pricing.customer.aerials
    photographerResult += pricing.photographer.aerials
    processorResult += pricing.processor.aerials
  }

  // Virtual Tour
  if (state.virtualTour) {
    customerResult += pricing.customer.virtualTour
    photographerResult += pricing.photographer.virtualTour
    processorResult += pricing.processor.virtualTour
  }

  // Travel Charge
  if (state.mileage) {
    customerResult += pricing.customer.travelChargePerMile * state.mileage
    photographerResult +=
      pricing.photographer.travelChargePerMile * state.mileage
  }

  if (state.halfOff) {
    photographerResult = photographerResult - 10
    processorResult = processorResult - 5
  }

  return {
    customer: customerResult,
    photographer: photographerResult,
    processor: processorResult
  }
}
