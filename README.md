# Product-Supply-And-Transport-Dashboard
A Web Dashboard that provides communication between two differnt users: Transporter and Manufacturer for professional services. It is developed using ReactJS, NodeJS, MySQL and Socket.io. The backend is written in TypeScript and follows MVC framework.

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/767bd0c2-ca08-4827-88af-bc1895e4034e)

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/d121c85c-7a3f-4883-8cf3-2a98e10d155b)

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/19e6beeb-adc4-4415-aae9-f832fa9b9e33)

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/702cb7b8-ab46-43f6-89fb-474b47134d60)

## Prerequisites

- Node.js and npm should be installed on your machine.
- MySQL Command Line Client and Workbench should be installed in your machine.

## Getting Started

1. Clone the repository/Unzip the repo:
2. Navigate to the project directory:

### Database Setup
-There are two ways to setup the database.

<h4>A) Via MySQL Workbench<h4>
-If you have MySQL Workbench installed, open the application and select the connection as shown below.
  
![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/6aaa4425-9c6d-4e7e-bea9-1b95409e9825)

-Provide the authentication details.

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/f5580bcb-00a8-461c-b0d5-61d278406f64)

-On the Navigator Tab to the Left, in the Management section, click on "Data Import/Restore"

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/a15fbb11-a1b4-43c1-befe-2aeb55206c71)

-Choose the "Import from Self Contained File" option from the current window. Choose the "sqlDumps.sql" file from the project directory.

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/e1f2754b-b39c-44e6-8101-656cbc2757dc)

-In the same window, click on the "New" Button near the "Default Target Schema" and type "threeway_studio" as the schema/database name in the "Create Schema" Dialog Box.

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/4ddc6c38-aa4f-4539-9589-9867b47b8e33)

-Click on "Import Progress Tab" and click on "Start Import" at the bottom of the window. The database will be setup.

![image](https://github.com/AdityaRaj1440/Product-Supply-And-Transport-Dashboard/assets/76805326/5a9f5749-6b16-46bc-9a59-678e7dfabc62)

<h4>B) Via MySQL Command Line Client</h4>
Step1:- Open MySQL Command Line Client Client and provide password.
         
            create database threeway_studio;
            use threeway_studio;
    
    to create Manufacturer Table:
        create table manufacturer(
            m_id int auto_increment primary key,
            name varchar(70),
            address varchar(1000),
            username varchar(50) unique,
            password varchar(100));

    to create Transporter Table:
        create table transporter(
            t_id int auto_increment primary key,
            name varchar(70),
            username varchar(50) unique,
            password varchar(100));

    to create Orders Table:
        create table orders(
            id int auto_increment primary key,
            o_id varchar(10),
            from_address varchar(1000),
            to_address varchar(1000),
            qty double,
            pickup varchar(1000),
            m_id int,
            t_id int,
            price double,
            foreign key(m_id) references manufacturer(m_id),
            foreign key(t_id) references transporter(t_id));

    to create Chats Table:
        create table chats(
            c_id int auto_increment primary key,
            message varchar(1000),
            o_id int,
            sender_category varchar(20),
            foreign key(o_id) references orders(id));


### Backend Setup

6. Open a terminal in the backend folder and install the libraries: 

       npm install

8. Create a env file and store the posgres login password with variable name:- "DB_PASSWORD"

9. Start the NodeJS backend server:

        nodemon
   or

        node index.js

The server will run at `http://localhost:3005`.

### Frontend Setup

9. Open a terminal in the Frontend's "src" folder and install the frontend dependencies using "npm i":


10. Start the React development server:


The app will be available at `http://localhost:3000`.

## Usage

- Access the React app by visiting `http://localhost:3000` in your web browser.
- The app interacts with the Express backend running at `http://localhost:3005`.
