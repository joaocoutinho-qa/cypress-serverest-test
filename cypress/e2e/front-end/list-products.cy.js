import listProducts from '../../pages/front-end/listProductsPage'

describe('Products list', () => {
  beforeEach(() => {
    listProducts.visitURL()
  })

  it("should validate the table's header", () => {
    listProducts.getProductsListTable().within(() => {
      listProducts.validateTabletHeader()
    })
  }) 

  it('should valdiate products list', () => {
    listProducts.getProductsList().then(nomes => {
      listProducts.validateProductsList(nomes)
    })
  })
})
