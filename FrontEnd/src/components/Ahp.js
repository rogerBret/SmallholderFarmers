// AHP function
function ahp(criteria, alternatives, judgments) {
  const n = criteria.length; // Number of criteria
  const m = alternatives.length; // Number of alternatives

  // Step 1: Calculate the pairwise comparison matrix for criteria
  const criteriaMatrix = calculatePairwiseComparisonMatrix(n, judgments.criteria);

  // Step 2: Calculate the priority vector for criteria
  const criteriaPriorityVector = calculatePriorityVector(criteriaMatrix);

  // Step 3: Calculate the weighted matrix for alternatives based on each criterion
  const weightedMatrices = [];
  const weightedVectors = [];
  
  for (let i = 0; i < n; i++) {
    const matrix = calculatePairwiseComparisonMatrix(m, judgments.alternatives[i]);
    weightedMatrices.push(matrix);
    const vector = calculatePriorityVector(matrix);
    weightedVectors.push(vector);
  }

  // Step 4: Calculate the overall priorities for alternatives
  const overallPriorities = calculateOverallPriorities(weightedMatrices, criteriaPriorityVector);

  // Step 5: Return the overall priorities
  return overallPriorities;
}

// Helper function to calculate the pairwise comparison matrix
function calculatePairwiseComparisonMatrix(n, judgments) {
  const matrix = [];

  for (let i = 0; i < n; i++) {
    matrix.push([]);
    for (let j = 0; j < n; j++) {
      if (i === j) {
        matrix[i].push(1); // Diagonal elements are always 1
      } else {
        const judgment = judgments[i][j];
        const reciprocal = 1 / judgment;
        matrix[i].push(reciprocal);
      }
    }
  }

  return matrix;
}

// Helper function to calculate the priority vector
function calculatePriorityVector(matrix) {
  const n = matrix.length;
  const vector = [];

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = 0; j < n; j++) {
      product *= matrix[j][i];
    }
    const nthRoot = Math.pow(product, 1 / n);
    vector.push(nthRoot);
  }

  const sum = vector.reduce((a, b) => a + b, 0);
  const priorityVector = vector.map(value => value / sum);

  return priorityVector;
}

// Helper function to calculate the overall priorities for alternatives
function calculateOverallPriorities(weightedMatrices, criteriaPriorityVector) {
  const m = weightedMatrices[0].length;
  const overallPriorities = [];

  for (let i = 0; i < m; i++) {
    let sum = 0;
    for (let j = 0; j < weightedMatrices.length; j++) {
      sum += weightedMatrices[j][i] * criteriaPriorityVector[j];
    }
    overallPriorities.push(sum);
  }

  return overallPriorities;
}

// Example usage
const criteria = ['Efficacity', 'Impact', 'Cost'];
const alternatives = ['compost', 'Natural', 'pesticide'];
const judgments = {
  criteria: [
    [1, 5, 3],
    [1/5, 1, 1/3],
    [1/3, 3, 1]
  ],
  alternatives: [
    [
      [1, 3, 5],
      [1/3, 1, 3],
      [1/5, 1/3, 

1]
    ],
    [
      [1, 1/3, 1/5],
      [3, 1, 1/3],
      [5, 3, 1]
    ],
    [
      [1, 3, 5],
      [1/3, 1, 3],
      [1/5, 1/3, 1]
    ]
  ]
};

const priorities = ahp(criteria, alternatives, judgments);
console.log('Overall priorities:', priorities);