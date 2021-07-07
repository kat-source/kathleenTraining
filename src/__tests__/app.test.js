const request = require('supertest')
const app = require('../app')

let token;


describe('Testing GET/ Method', () => {
    

    beforeAll(  done => {
        request(app)
            .post("/login")
            .send({ username: 'Kathleen' })
            .end((err, response) => {
                console.log(`RES BADE = ${response.body.accessToken}`)
                token = response.body.accessToken;
                done();
            });
           
            console.log(token)
    });

    it("should be able to login", async () => {
        const res = await request(app)
            .post("/login")
            .send({ username: "Kathleen"});

        expect(res.status).toBe(200);
       // done();
    });

    it("should not be able to login with incorrect credentials", async () => {
        const res = await request(app)
            .post("/login")
            .send({ username: "Kimberly" });

        expect(res.status).toBe(401);
        // done();
    });

    it ('should be able to list all of the projects from the database', async() => {

        console.log(`should be able to token: ${token}`)

       const res = await request(app)
        .get('/project')
        .set('authorization', `Bearer ${token}`)

        expect(res.statusCode).toBe(200);
    });

    it ('Should not allow to get data without authorization', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .get('/project')
        // .set('authorization', `Bearer ${token}`)
       
        console.log(token)

        expect(res.statusCode).toBe(401);
    });
   
})



describe('Testing GET/:ID Method', () => {
    

    beforeAll(  done => {
        request(app)
            .post("/login")
            .send({ username: 'Kathleen' })
            .end((err, response) => {
                console.log(`RES BADE = ${response.body.accessToken}`)
                token = response.body.accessToken;
                done();
            });
           
            console.log(token)
    });

    it ('should be able to get a particular project by id', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .get('/project/1')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        expect(res.statusCode).toBe(200);
    });

    it ('should not allow to get a particular project by id without authorization', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .get('/project/1')
        // .set('authorization', `Bearer ${token}`)
        console.log(token)

        expect(res.statusCode).toBe(401);
    });
   
    it ('when there is no project that matches the ID inputted by the user', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .get('/project/10004')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        const response = JSON.stringify(res.body.projectList)
        console.log(res.body);

        expect(response).toBe('null');
    });

    it ('when the user has inputted Not A Number value for the ID', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .get('/project/sdag')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        const response = JSON.stringify(res.body)
        console.log(res.body);

        expect(response).toMatch('{}');
    });
})




describe('Testing DELETE/:ID Method', () => {
    

    beforeAll(  done => {
        request(app)
            .post("/login")
            .send({ username: 'Kathleen' })
            .end((err, response) => {
                console.log(`RES BADE = ${response.body.accessToken}`)
                token = response.body.accessToken;
                done();
            });
           
            console.log(token)
    });

    it ('should be able to delete a particular project by id', async() => {

        // const res = await request(app)
        // .delete('/project/73')
        // .set('authorization', `Bearer ${token}`)

        // console.log(`Expected: 200 \nReceived: ${res.statusCode}`)
        // expect(res.statusCode).toBe(200);

        // const result = await request(app)
        // .get('/project/73')
        // .set('authorization', `Bearer ${token}`)

        // console.log(`Expected: 404 \nReceived: ${result.statusCode}`)
        // expect(result.statusCode).toBe(404);

    });

    it ('should not allow to get a particular project by id without authorization', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .delete('/project/1')
        console.log(token)

        expect(res.statusCode).toBe(401);
    });
   
    it ('when there is no project that matches the ID inputted by the user', async() => {
        jest.setTimeout(30000);
        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .delete('/project/1004')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        const response = JSON.stringify(res.body.deleteProject)
        console.log(res.body.deleteProject)

        expect(response).toMatch('Error: Project not deleted');
    });

    it ('when the user has inputted Not A Number value for the ID', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .delete('/project/sdag')
        .set('authorization', `Bearer ${token}`)
        console.log(token)
        
        const response = JSON.stringify(res.body.deleteProject)
        console.log(res.body)

        expect(response).toMatch('Error');
    });
})



describe('Testing UPDATE/:ID Method', () => {
    

    beforeAll(  done => {
        request(app)
            .post("/login")
            .send({ username: 'Kathleen' })
            .end((err, response) => {
                console.log(`RES BADE = ${response.body.accessToken}`)
                token = response.body.accessToken;
                done();
            });
           
            console.log(token)
    });

    it ('should be able to update a particular project by id', async() => {

        const res = await request(app)
        .patch('/project/58')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: "New Project Title",
            description: "New Description"
        })

        console.log(`Expected: 200 \nReceived: ${res.statusCode}`)
        expect(res.statusCode).toBe(200);

    });

    it ('should not allow to get a particular project by id without authorization', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .patch('/project/58')
        // .set('authorization', `Bearer ${token}`)
        console.log(token)

        expect(res.statusCode).toBe(401);
    });
   
    it ('when there is no project that matches the ID inputted by the user', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .patch('/project/1004')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        const response = JSON.stringify(res.body.result)
        console.log(res.body.result);

        expect(response).toMatch('Error');
    });

    it ('when the user has inputted Not A Number value for the ID', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .patch('/project/sdag')
        .set('authorization', `Bearer ${token}`)
        console.log(token)
         const response = JSON.stringify(res.body.result)

         console.log(res.body);
         console.log(res.statusCode);
        expect(response).toMatch('Error');
    });

    it ('when the user did not input any value for update', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .patch('/project/1')
        .set('authorization', `Bearer ${token}`)
        console.log(token)

        const response = JSON.stringify(res.body.result)
        console.log(res.body)

        expect(response).toMatch('Error: Project not found or does not exist');
    });
})


describe('Testing POST/ Method', () => {
    

    beforeAll(  done => {
        request(app)
            .post("/login")
            .send({ username: 'Kathleen' })
            .end((err, response) => {
                console.log(`RES BADE = ${response.body.accessToken}`)
                token = response.body.accessToken;
                done();
            });
           
            console.log(token)
    });

    it("should be able to login", async () => {
        const res = await request(app)
            .post("/login")
            .send({ username: "Kathleen"});

        expect(res.status).toBe(200);
       // done();
    });

    it("should not be able to login with incorrect credentials", async () => {
        const res = await request(app)
            .post("/login")
            .send({ username: "Kimberly" });

        expect(res.status).toBe(401);
        // done();
    });

    it ('should be able to add a new project to the database', async() => {

       const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: 'Newly Created Test Project',
            description: 'Aliquam erat volutpat. Vestibulum sodales dui sapien, ac dictum justo scelerisque vitae. Ut pellentesque ultrices ante eget egestas. Phasellus ac blandit eros. Aliquam dictum finibus eleifend. Sed facilisis blandit odio pharetra posuere. Mauris vel nibh sapien',
            budget: '$10000',
            email: 'testEmail@email.com'
        })

        expect(res.statusCode).toBe(201);
    });

    it ('Should not allow to get data without authorization', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .send({
            title: 'Newly Created Test Project',
            description: 'Aliquam erat volutpat. Vestibulum sodales dui sapien, ac dictum justo scelerisque vitae. Ut pellentesque ultrices ante eget egestas. Phasellus ac blandit eros. Aliquam dictum finibus eleifend. Sed facilisis blandit odio pharetra posuere. Mauris vel nibh sapien',
            budget: '$10000',
            email: 'testEmail@email.com'
        })
       
        console.log(token)
        console.log(`Expected: 401 \nReceived: ${res.statusCode}`)
        expect(res.statusCode).toBe(401);
    });

    it ('Should not allow to add a project with other data missing (title)', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
        .send({
            description: 'Aliquam erat volutpat. Vestibulum sodales dui sapien, ac dictum justo scelerisque vitae. Ut pellentesque ultrices ante eget egestas. Phasellus ac blandit eros. Aliquam dictum finibus eleifend. Sed facilisis blandit odio pharetra posuere. Mauris vel nibh sapien',
            budget: '$10000',
            email: 'testEmail@email.com'
        })
       
        console.log(token)
        console.log(`Expected: 400 \nReceived: ${res.statusCode}`)
        // expect(res.body.message).toMatch('Please input')
        expect(res.statusCode).toBe(400);
    });

    it ('Should not allow to add a project with other data missing (description)', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: 'Newly Created Test Project',
            budget: '$10000',
            email: 'testEmail@email.com'
        })
       
        console.log(token)
        console.log(`Expected: 400 \nReceived: ${res.statusCode}`)
        // expect(res.body.message).toMatch('Please input')
        expect(res.statusCode).toBe(400);
    });

    it ('Should not allow to add a project with other data missing (budget)', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: 'Newly Created Test Project',
            description: 'Aliquam erat volutpat. Vestibulum sodales dui sapien, ac dictum justo scelerisque vitae. Ut pellentesque ultrices ante eget egestas. Phasellus ac blandit eros. Aliquam dictum finibus eleifend. Sed facilisis blandit odio pharetra posuere. Mauris vel nibh sapien',
            email: 'testEmail@email.com'
        })
       
        console.log(token)
        console.log(`Expected: 400 \nReceived: ${res.statusCode}`)
        // expect(res.body.message).toMatch('Please input')
        expect(res.statusCode).toBe(400);
    });

    it ('Should not allow to add a project with other data missing (email)', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
        .send({
            title: 'Newly Created Test Project',
            description: 'Aliquam erat volutpat. Vestibulum sodales dui sapien, ac dictum justo scelerisque vitae. Ut pellentesque ultrices ante eget egestas. Phasellus ac blandit eros. Aliquam dictum finibus eleifend. Sed facilisis blandit odio pharetra posuere. Mauris vel nibh sapien',
            budget: '$10000'
        })
       
        console.log(token)
        console.log(`Expected: 400 \nReceived: ${res.statusCode}`)
        // expect(res.body.message).toMatch('Please input')
        expect(res.statusCode).toBe(400);
    });

    it ('When user did not input any value to add', async() => {

        console.log(`should be able to token: ${token}`)

        const res = await request(app)
        .post('/project')
        .set('authorization', `Bearer ${token}`)
       
        console.log(res.body.message)
        console.log(`Expected: 400 \nReceived: ${res.statusCode}`)
        // expect(res.body.message).toMatch('Please input')
        expect(res.statusCode).toBe(400);
    });
   
})