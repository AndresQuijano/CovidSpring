package com.cheessemess.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class GettingStartedController {
    @RequestMapping("/gettingStarted")
    public String getInfoPersonalForm(){
        return "gettingStarted";
    }
}
