package com.example.mahalaxmi.controller;

import com.example.mahalaxmi.model.Customer;
import com.example.mahalaxmi.repository.CustomerRepository;
import com.example.mahalaxmi.service.ExcelService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api")
public class RegistrationController {
    private final CustomerRepository customerRepository;
    private final ExcelService excelService;

    @Value("${file.upload-dir}")
    private String uploadDir;

    public RegistrationController(CustomerRepository customerRepository, ExcelService excelService) {
        this.customerRepository = customerRepository;
        this.excelService = excelService;
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(
            @RequestParam String name,
            @RequestParam String mobile,
            @RequestParam String address,
            @RequestParam(required = false) String email,
            @RequestParam String couponNumber,
            @RequestParam("screenshot") MultipartFile screenshot) {

        try {
            // Save Screenshot
            String fileName = System.currentTimeMillis() + "_" + screenshot.getOriginalFilename();
            String filePath = uploadDir + fileName;
            screenshot.transferTo(new File(filePath));

            // Save Customer Data
            Customer customer = new Customer(null, name, mobile, address, email, couponNumber, filePath);
            customerRepository.save(customer);

            return ResponseEntity.ok("✅ नोंदणी यशस्वी! तुमची एंट्री सेव्ह झाली आहे.");
        } catch (IOException e) {
            return ResponseEntity.status(500).body("❌ एरर: फाईल अपलोड फेल.");
        }
    }

    @GetMapping("/export-excel")
    public ResponseEntity<String> exportToExcel() {
        try {
            List<Customer> customers = customerRepository.findAll();
            excelService.writeToExcel(customers);
            return ResponseEntity.ok("✅ Excel फाईल तयार झाली: excel-data/customers.xlsx");
        } catch (IOException e) {
            return Response
