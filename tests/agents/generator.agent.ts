export class GeneratorAgent {

  getValidData() {
    return {
      productName: 'T shirts for Men and Women',
      category: 'Apparel & Fashion',
      subCategory: 'Casual Wear',
      productCategory: 'Unisex Casual T-Shirts',
      description: 'I need 70 pieces of high-quality unisex casual t-shirts for my employees as part of our corporate gifting program. The t-shirts should be made of comfortable, breathable fabric suitable for year-round wear. Please provide options for different sizes (S, M, L, XL) to accommodate our diverse workforce.',
      quantity: '70',
      units: 'Pieces',
      phoneNumber: '8073858529',
      firstName: 'Balasubramanian',
      lastName: 'R',
      email: 'balasubramanian.r@yopmail.com'
    };
  }

  getInvalidData() {
    return {
      productName: 'T SHIRTS FOR MEN AND WOMEN',
      category: 'Apparel & Fashion',
      subCategory: 'Casual Wear',
      productCategory: 'Unisex Casual T-Shirts',
      description: '',
      quantity: '0',
      units: 'Pieces'
    };
  }
}