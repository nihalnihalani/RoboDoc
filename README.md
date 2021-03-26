# RoboDoc
![RoboDoc](images/robodoc.gif)

[![HitCount](http://hits.dwyl.com/nihalnihalani/RoboDoc.svg)](http://hits.dwyl.com/nihalnihalani/RoboDoc)

## Inspiration
We came up with this idea because of the lockdown caused by the coronavirus pandemic people are confined to your homes and it's a bit risky visiting the hospitals as there are chances of getting infected. We all are facing problems because of the coronavirus pandemic where people are in a state where anyone suffering from a disease is thought to be suffering from **COVID19**. Therefore we wanted to help people reduce this state of panic and thought of building a bot that will answer people’s questions regarding symptoms. That way people will gain knowledge of their disease.

## What it does
**RoboDoc** is a messenger bot where people could chat with it and get their symptoms analyzed using messages. Based on symptoms sent by the user it analysis and most accurate diseases are diagnosed. At present we have added 21 common diseases we will be expanding it to 87 diseases our main objective was to lessen the panic caused by the coronavirus pandemic. We have added analysis of Frontal **chest x-ray for covid19** and analysis of **mammography for breast cancer detection**.

##Dataset
For the COVID19 detection model using X-rays, we used Kaggle and Github dataset accounting for total of 1300 COVID19 and 1200 normal chest x-rays. For breast cancer, we used the Kaggle dataset. For symptoms and disease, we used a CSV file for NLP training.



## How we built it
We are using wit.ai for Natural Language Processing and based on symptoms mentioned by users we are predicting the disease and for detection of **covid19** using chest x-ray and breast cancer using mammography we are using tensorflow.js models and javascript

## Challenges we ran into
Training using wit.ai was difficult and between the event, there were some changes made to wit.ai. Integrating tensorflow.js models with messenger webhook and integrating all of them into one single project was challenging.

We are trying to make our bot perfect and will research methods of implementation that could improve the accuracy of our bot. We will experiment with other architectures for training our model to improve efficiency. This can be achieved approximately in a time span of a month. After this is done we may look for funding and make it available to people.

## Accomplishments that we're proud of
We are proud that we could build a chatbot that will help people to know whether they are covid positive or not. There is a messenger bot itself that detects covid using lungs x-rays and gives you an idea whether you have covid by symptoms is a proud thing for us. We were able to deploy a python trained model into javascript and deploy it on a server is an accomplishment to be proud of, as it was one of our major challenges. And Finally, we are proud that our bot is working as it should. So basically we are proud that we overcame all the challenges and built an application.

## What we learned
A deeper understanding of **Facebook Messenger** architecture and how wit.ai works.
Training of NLP using wit.ai. Machine learning model creation, conversion to tensorflow.js, and integrating it with messenger

## What's next for RoboDoc
At present we have added **21 diseases** we will be expanding it to **87 diseases** for predictions using all symptoms. We are trying to make our bot accurate and as it is used more we will train it for more symptoms and diseases. We will research methods of implementation that could improve the accuracy of our bot. We will experiment with other architectures for training our model to improve efficiency. We will be including more medical models for the diagnosis of more diseases using x-rays and MRIs. This can be achieved approximately in a time span of a month. After this is done we may look for funding and make it available to people.

