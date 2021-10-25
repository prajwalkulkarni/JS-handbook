
import { screen,render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import Greeting from "./Greeting"

//Test suite
describe('Greeting component',()=>{
    
    //Individual tests
    test('Greeting component hello world text',()=>{
        //Arrange
        render(<Greeting/>)
    
        //Act
        // ...nothing
    
        //Assert
        let linkElement = screen.getByText(/hello world/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('Check if button clicked or not',()=>{
        //Arrange
        render(<Greeting/>)
        
        //Assert
        let linkElement = screen.getByText(/P tag/i)
        expect(linkElement).toBeInTheDocument()
    })

    test('Button click state change',()=>{
        //Arrange
        render(<Greeting/>)

        //Act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //assert
        const outPutElement = screen.getByText(/changed/i)
        expect(outPutElement).toBeInTheDocument()
    })
}
)
