import { Rule } from "sanity";

export const contactForm = 
  {
      "name": "contactForm",
      "type": "document",
      "fields": [
        {
          "name": "name",
          "type": "string",
          "title": "Name",
          "validation": (rule: Rule) => rule.required().min(3).max(50)
        },
        {
          "name": "email",
          "type": "string",
          "title": "Email Address",
          "validation": (rule: Rule) => rule.required().email()
        },

        {
            "name": "message",
            "type": "string",
            "title": "Message",
            "validation": (rule: Rule) => rule.required().min(5).max(150)
          },
       
      
       
      ]
    }