# React FAQ Accordion
## Frequently Asked Questions Component for React
![](./Acordion_White.png)

### More Screenshots below the instructions.

### How To Install?
```bash
npm i react-faq-acordion
```
### Required Props [Array] 
```
const data = [
    { title:'Heading 1',
	 paragraph: 'Some text Here'},
    { title:'Heading 2',
	 paragraph: 'Some text Here 2'}
]
```
### How To Use?
```bash
import { Acordion } from 'react-faq-acordion';

const someComponent = ()=>(
    <Acordion 
        data={data} 
        theme='Dark' 
    />
)
```
### Props
#### data=[Array] :  Type = Array, Scheme in the first comments.
### theme='String' Type = String, The default theme is White. Available: dark, blue, green, purple and white (Default).

## Screenshot
![](./Acordion_White.png)
![](./Acordion_Dark.png)
![](./Acordion_Green.png)