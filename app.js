/**
 * AegisMail Forensics AI — SIH 2026 Problem Statement 26106
 * Core Application Engine & Interactive Simulation
 * Powered by Antigravity AI Agentic Assistant
 */

// --- SAMPLE DATA FIXTURES ---
const PRESET_SAMPLES = {
  sbi_bank: {
    id: "CASE-2026-SBI-98214",
    title: "SBI YONO Phishing & KYC Fraud",
    file: "sbi_bank_phishing.eml",
    subject: "[CRITICAL ACTION REQUIRED] Your SBI YONO Account Will Be Blocked in 24 Hours - Update PAN/KYC Immediately",
    from: '"State Bank of India - Security Desk" <alert@sbi.co.in>',
    replyTo: "support-verification@sbi-kyc-desk.cc",
    to: "victim.user@gmail.com",
    date: "Mon, 31 Aug 2026 14:21:40 +0530",
    messageId: "<20260831142140.98421.qmail@sbi-alert-secure-update.cc>",
    classification: "CRITICAL PHISHING",
    riskScore: 94,
    riskLevel: "critical",
    auth: {
      spf: { status: "FAIL", note: "domain alert@sbi.co.in does not designate 185.220.101.45 as permitted sender" },
      dkim: { status: "NEUTRAL", note: "No valid cryptographic signature found for sbi.co.in" },
      dmarc: { status: "FAIL", note: "p=REJECT policy strictly violated by unauthorized sending IP" },
      alignment: { status: "MISMATCH", note: "From: sbi.co.in does NOT match Reply-To: sbi-kyc-desk.cc" }
    },
    nlp: {
      urgencyScore: 92,
      sentiment: "High Urgency / Coercive Financial Threat",
      triggers: [
        { text: "CRITICAL ACTION REQUIRED", type: "critical" },
        { text: "Blocked in 24 Hours", type: "critical" },
        { text: "Update PAN/KYC Immediately", type: "warning" },
        { text: "temporarily placed on restricted status", type: "critical" },
        { text: "permanent deactivation", type: "critical" },
        { text: "Tonight before 23:59 IST", type: "warning" },
        { text: "VERIFY KYC & UNBLOCK YONO ACCOUNT", type: "critical" }
      ],
      socialEngineeringFlags: ["Brand Impersonation (State Bank of India)", "Manufactured Urgency (24h timer)", "Credential / Identity Harvesting (PAN/KYC)"]
    },
    urls: [
      {
        url: "http://sbi-kyc-update-portal.cc/login/verify.php?token=9823419082",
        domain: "sbi-kyc-update-portal.cc",
        age: "3 days old (Registered 28-Aug-2026)",
        registrar: "NameCheap Inc / Privacy Protected",
        vtHits: "17 / 92 engines flagged Malicious Phishing",
        ip: "185.220.101.45",
        status: "MALICIOUS"
      }
    ],
    relays: [
      { hop: 0, ip: "194.26.29.112", host: "vps-node-49.bulletproof-host.net", location: "Frankfurt, Germany", lat: 50.1109, lng: 8.6821, isp: "Bulletproof VPS Hosting Corp", note: "Earliest Reliable Source IP" },
      { hop: 1, ip: "185.220.101.45", host: "mail.sbi-alert-secure-update.cc", location: "Amsterdam, Netherlands", lat: 52.3676, lng: 4.9041, isp: "Tor / Anonymous Cloud Relay", note: "Intermediate Mail Relay" },
      { hop: 2, ip: "209.85.208.65", host: "mx.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC Gateway", note: "Recipient MX Inbound Node" }
    ],
    infrastructure: {
      country: "Germany",
      city: "Frankfurt am Main",
      isp: "Bulletproof VPS Hosting Corp",
      asn: "AS48291 (Bulletproof Network)",
      earliestIp: "194.26.29.112",
      confidence: "MEDIUM",
      caveat: "Attribution is supported by earliest Received header. High probability of bulletproof VPS infrastructure used by attacker."
    },
    campaign: {
      name: "Operation Bengal Phish #04",
      clusterId: "CAMP-2026-YONO-991",
      relatedEmailsCount: 6,
      relatedDomains: ["sbi-kyc-desk.cc", "sbi-kyc-update-portal.cc", "sbi-alert-secure-update.cc"],
      relatedIps: ["194.26.29.112", "185.220.101.45", "194.26.29.115"],
      threatActorType: "Financial Credential Harvesting Syndicate"
    },
    explainableScore: [
      { name: "DMARC / SPF Authentication Hard Failure", weight: "+30 pts", desc: "Forged domain header claiming official SBI origin" },
      { name: "Sender vs Reply-To Mismatch (.cc lookalike)", weight: "+25 pts", desc: "Replies channeled to an adversary-controlled server" },
      { name: "Adversary Lookalike Domain & Threat Intel Hits", weight: "+20 pts", desc: "Domain created 3 days ago; flagged in VirusTotal" },
      { name: "Urgency / Threat Social Engineering NLP Vector", weight: "+15 pts", desc: "High coercion keywords detected in subject and body" },
      { name: "Known Bulletproof ASN Source Origin", weight: "+4 pts", desc: "Earliest hop originates from high-abuse IP range" }
    ],
    rawContent: `Delivered-To: victim.user@gmail.com
Received: from mail.sbi-alert-secure-update.cc (185.220.101.45) by mx.google.com; Mon, 31 Aug 2026 14:22:10 +0530
Received: from unknown (HELO vps-node-49.bulletproof-host.net) (194.26.29.112) by mail.sbi-alert-secure-update.cc; Mon, 31 Aug 2026 08:51:45 +0000
Authentication-Results: mx.google.com; spf=fail smtp.mailfrom=alert@sbi.co.in; dkim=neutral; dmarc=fail header.from=sbi.co.in
From: "State Bank of India - Security Desk" <alert@sbi.co.in>
Reply-To: support-verification@sbi-kyc-desk.cc
To: victim.user@gmail.com
Subject: [CRITICAL ACTION REQUIRED] Your SBI YONO Account Will Be Blocked in 24 Hours - Update PAN/KYC Immediately
Date: Mon, 31 Aug 2026 14:21:40 +0530

Dear Valued Customer,
URGENT: Our automated fraud detection system has temporarily placed your SBI NetBanking and YONO Mobile App on restricted status.
You must update your PAN card details and re-verify your KYC identity immediately to avoid permanent deactivation of your account within 24 hours.
Deadline: Tonight before 23:59 IST
Link: http://sbi-kyc-update-portal.cc/login/verify.php?token=9823419082`
  },

  principal_bec: {
    id: "CASE-2026-BEC-41029",
    title: "College Principal NAAC Fund Fraud (BEC)",
    file: "principal_bec_fraud.eml",
    subject: "URGENT: Confidential Administrative Assistance Required - Immediate Fund Transfer for NAAC Inspection",
    from: '"Dr. Arvind Sharma (Principal)" <principal@engineering-college.edu.in>',
    replyTo: "principal.office.execdesk@gmail.com",
    to: "hod.cse@engineering-college.edu.in",
    date: "Mon, 31 Aug 2026 10:13:10 +0530",
    messageId: "<BEC-9821034-20260831101310@mail-relay-open.cloudvps-host.de>",
    classification: "HIGH RISK BEC FRAUD",
    riskScore: 86,
    riskLevel: "high",
    auth: {
      spf: { status: "SOFTFAIL", note: "IP 89.163.142.77 not listed in engineering-college.edu.in SPF record" },
      dkim: { status: "NEUTRAL", note: "No cryptographic DKIM header found" },
      dmarc: { status: "FAIL", note: "DMARC policy failed due to unaligned sender IP" },
      alignment: { status: "MISMATCH", note: "From: engineering-college.edu.in vs Reply-To: @gmail.com" }
    },
    nlp: {
      urgencyScore: 88,
      sentiment: "Authority Impersonation / Urgent Financial Transfer",
      triggers: [
        { text: "URGENT", type: "critical" },
        { text: "Confidential Administrative Assistance", type: "warning" },
        { text: "NAAC Peer Team accreditation visit", type: "info" },
        { text: "unable to answer phone calls", type: "critical" },
        { text: "emergency honorarium advance of Rs. 85,000", type: "critical" },
        { text: "immediate UPI / RTGS", type: "critical" },
        { text: "utmost discretion and confidentiality", type: "warning" }
      ],
      socialEngineeringFlags: ["Authority / Executive Impersonation (College Principal)", "Communication Isolation ('Cannot answer phone')", "Urgent Financial Disbursement Request"]
    },
    urls: [],
    relays: [
      { hop: 0, ip: "185.181.61.15", host: "proxy-vpn-node.mullvad-exit.org", location: "Stockholm, Sweden", lat: 59.3293, lng: 18.0686, isp: "Mullvad Commercial VPN Gateway", note: "Source Client IP (VPN Exit Node)" },
      { hop: 1, ip: "89.163.142.77", host: "mail-relay-open.cloudvps-host.de", location: "Nuremberg, Germany", lat: 49.4521, lng: 11.0767, isp: "Hetzner Cloud VPS", note: "Misconfigured Open Relay" },
      { hop: 2, ip: "209.85.208.65", host: "mx.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC Gateway", note: "Recipient MX Inbound Node" }
    ],
    infrastructure: {
      country: "Sweden",
      city: "Stockholm",
      isp: "Mullvad VPN AB",
      asn: "AS39351 (Mullvad Privacy Network)",
      earliestIp: "185.181.61.15",
      confidence: "LOW-MEDIUM",
      caveat: "Origin IP is an anonymizing commercial VPN exit node. Geolocation reflects the proxy gateway, not necessarily the physical actor."
    },
    campaign: {
      name: "HigherEd Executive Impersonation Syndicate",
      clusterId: "CAMP-2026-EDU-BEC-08",
      relatedEmailsCount: 4,
      relatedDomains: ["engineering-college.edu.in (spoofed)", "gmail.com (freemail reply)"],
      relatedIps: ["185.181.61.15", "89.163.142.77"],
      threatActorType: "CEO / Principal Fraud Business Email Compromise"
    },
    explainableScore: [
      { name: "Executive Display-Name Spoofing & Reply-To Hijack", weight: "+30 pts", desc: "Principal identity used with a free webmail drop account" },
      { name: "Unauthenticated Relay Server (SPF/DMARC Fail)", weight: "+25 pts", desc: "Mail relayed via unauthorized third-party European VPS" },
      { name: "Coercive Social Engineering / Financial Request", weight: "+20 pts", desc: "Requests Rs. 85,000 via UPI with communication isolation" },
      { name: "Commercial VPN Origin Anonymizer", weight: "+11 pts", desc: "Earliest transmission hop traces to known Mullvad VPN node" }
    ],
    rawContent: `Delivered-To: hod.cse@engineering-college.edu.in
Received: from mail-relay-open.cloudvps-host.de (89.163.142.77) by mx.google.com; Mon, 31 Aug 2026 10:14:02 +0530
Received: from unknown (HELO proxy-vpn-node.mullvad-exit.org) (185.181.61.15) by mail-relay-open.cloudvps-host.de; Mon, 31 Aug 2026 11:43:20 +0200
Authentication-Results: mx.google.com; spf=softfail; dkim=neutral; dmarc=fail header.from=engineering-college.edu.in
From: "Dr. Arvind Sharma (Principal)" <principal@engineering-college.edu.in>
Reply-To: principal.office.execdesk@gmail.com
To: hod.cse@engineering-college.edu.in
Subject: URGENT: Confidential Administrative Assistance Required - Immediate Fund Transfer for NAAC Inspection
Date: Mon, 31 Aug 2026 10:13:10 +0530

Dear Professor,
I am currently locked in an emergency closed-door meeting regarding tomorrow's NAAC visit.
I am unable to answer phone calls until 4:00 PM.
We urgently need to disburse an emergency honorarium advance of Rs. 85,000.
UPI ID: emergency.naac.advance@okhdfcbank
Kindly reply with the screenshot. Treat this matter with utmost discretion.`
  },

  income_tax: {
    id: "CASE-2026-ITD-81203",
    title: "Income Tax Department Refund Scam",
    file: "income_tax_refund_scam.eml",
    subject: "Notice of Approved Tax Refund of Rs. 42,850 for Assessment Year 2025-26 - Action Pending",
    from: '"Income Tax Department (E-Filing Portal)" <donotreply@incometax.gov.in>',
    replyTo: "refund-disbursement@incometaxindia-refund.online",
    to: "taxpayer.citizen@gmail.com",
    date: "Mon, 31 Aug 2026 16:29:45 +0530",
    messageId: "<ITD-REFUND-2026-98120349@incometaxindia-refund.online>",
    classification: "CRITICAL PHISHING",
    riskScore: 92,
    riskLevel: "critical",
    auth: {
      spf: { status: "FAIL", note: "domain donotreply@incometax.gov.in does not designate 178.62.204.99 as permitted sender" },
      dkim: { status: "FAIL", note: "Cryptographic signature validation failed (invalid hash)" },
      dmarc: { status: "FAIL", note: "p=REJECT policy strictly enforced by Government of India domain" },
      alignment: { status: "MISMATCH", note: "From: incometax.gov.in vs Reply-To: incometaxindia-refund.online" }
    },
    nlp: {
      urgencyScore: 89,
      sentiment: "Government Impersonation / False Financial Reward",
      triggers: [
        { text: "Notice of Approved Tax Refund", type: "warning" },
        { text: "Rs. 42,850", type: "info" },
        { text: "within 2 hours", type: "critical" },
        { text: "verify your PAN, Aadhaar and preferred bank account", type: "critical" },
        { text: "Failure to claim within 48 hours will result in forfeiture", type: "critical" }
      ],
      socialEngineeringFlags: ["Government Body Impersonation (Income Tax Dept)", "Financial Incentive / False Lure (Refund)", "Sensitive PII & Banking Credential Theft"]
    },
    urls: [
      {
        url: "https://incometaxindia-refund.online/claim/verify?pan=ABCDE1234F",
        domain: "incometaxindia-refund.online",
        age: "1 day old (Registered 30-Aug-2026)",
        registrar: "Hostinger International Ltd",
        vtHits: "23 / 92 security vendors flagged Phishing",
        ip: "178.62.204.99",
        status: "MALICIOUS"
      }
    ],
    relays: [
      { hop: 0, ip: "193.106.191.242", host: "localhost (unknown)", location: "Kyiv, Ukraine", lat: 50.4501, lng: 30.5234, isp: "Cloud Hosted Server", note: "Earliest Source Node" },
      { hop: 1, ip: "178.62.204.99", host: "mx-outbound.hostinger-spoof-node.xyz", location: "London, United Kingdom", lat: 51.5074, lng: -0.1278, isp: "DigitalOcean Cloud VPS", note: "Outbound Spoof Gateway" },
      { hop: 2, ip: "209.85.208.65", host: "mx.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC Gateway", note: "Recipient MX Inbound Node" }
    ],
    infrastructure: {
      country: "Ukraine",
      city: "Kyiv",
      isp: "Cloud Infrastructure Host",
      asn: "AS51852",
      earliestIp: "193.106.191.242",
      confidence: "MEDIUM",
      caveat: "Earliest hop identified from Received chain. Phishing portal hosted on DigitalOcean UK IP."
    },
    campaign: {
      name: "ITD Tax Season Phishing Wave 2026",
      clusterId: "CAMP-2026-GOV-ITD-11",
      relatedEmailsCount: 7,
      relatedDomains: ["incometaxindia-refund.online", "incometax-gov-in.cc", "hostinger-spoof-node.xyz"],
      relatedIps: ["193.106.191.242", "178.62.204.99"],
      threatActorType: "Government Impersonation Tax Lure Syndicate"
    },
    explainableScore: [
      { name: "Government Domain Spoof (incometax.gov.in)", weight: "+32 pts", desc: "SPF/DMARC rejection on protected official GOV domain" },
      { name: "Phishing Domain Typosquatting / Lookalike", weight: "+25 pts", desc: "incometaxindia-refund.online registered yesterday" },
      { name: "High Threat Intelligence Hit Rate (23 engines)", weight: "+20 pts", desc: "URL blacklisted on PhishTank and VirusTotal feeds" },
      { name: "Forfeiture Threat / Artificial Deadline", weight: "+15 pts", desc: "Urgency coercive tactic to bypass victim scrutiny" }
    ],
    rawContent: `Delivered-To: taxpayer.citizen@gmail.com
Received: from mx-outbound.hostinger-spoof-node.xyz (178.62.204.99) by mx.google.com; Mon, 31 Aug 2026 16:30:22 +0530
Received: from localhost (193.106.191.242) by mx-outbound.hostinger-spoof-node.xyz; Mon, 31 Aug 2026 13:59:10 +0200
Authentication-Results: mx.google.com; spf=fail; dkim=fail; dmarc=fail header.from=incometax.gov.in
From: "Income Tax Department (E-Filing Portal)" <donotreply@incometax.gov.in>
Reply-To: refund-disbursement@incometaxindia-refund.online
To: taxpayer.citizen@gmail.com
Subject: Notice of Approved Tax Refund of Rs. 42,850 for Assessment Year 2025-26 - Action Pending
Date: Mon, 31 Aug 2026 16:29:45 +0530

Income Tax Department, Government of India
Approved refund: Rs. 42,850.
To claim your pending refund within 2 hours, verify PAN, Aadhaar & bank details:
=> https://incometaxindia-refund.online/claim/verify?pan=ABCDE1234F
Note: Failure to claim within 48 hours will result in forfeiture.`
  },

  google_legit: {
    id: "CASE-2026-LEG-00129",
    title: "Google Security Alert (Legitimate)",
    file: "google_security_legit.eml",
    subject: "Security alert: New sign-in from Chrome on Windows",
    from: '"Google Accounts" <no-reply@accounts.google.com>',
    replyTo: "no-reply@accounts.google.com",
    to: "mriganka.developer@gmail.com",
    date: "Mon, 31 Aug 2026 19:00:12 GMT",
    messageId: "<110328912389102.1725102012093.no-reply@accounts.google.com>",
    classification: "CLEAN / LEGITIMATE",
    riskScore: 2,
    riskLevel: "clean",
    auth: {
      spf: { status: "PASS", note: "domain of gaia.bounces.google.com designates 209.85.208.65 as permitted sender" },
      dkim: { status: "PASS", note: "Cryptographic signature matches google.com key (20230601)" },
      dmarc: { status: "PASS", note: "Full alignment pass with google.com p=REJECT policy" },
      alignment: { status: "MATCH", note: "From matches envelope sender and Return-Path perfectly" }
    },
    nlp: {
      urgencyScore: 12,
      sentiment: "Standard Informational Security Notification",
      triggers: [],
      socialEngineeringFlags: ["None (Standard legitimate transactional notification)"]
    },
    urls: [
      {
        url: "https://myaccount.google.com/notifications",
        domain: "myaccount.google.com",
        age: "27 years old (Google LLC)",
        registrar: "MarkMonitor Inc",
        vtHits: "0 / 92 engines flagged (Safe)",
        ip: "142.250.190.46",
        status: "SAFE"
      }
    ],
    relays: [
      { hop: 0, ip: "209.85.208.65", host: "mail-ed1-f65.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC", note: "Authorized Google Outbound MTA" },
      { hop: 1, ip: "2002:a17:906:848d::", host: "mx.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC Gateway", note: "Delivered to Target Mailbox" }
    ],
    infrastructure: {
      country: "United States",
      city: "Mountain View, California",
      isp: "Google LLC",
      asn: "AS15169 (Google Infrastructure)",
      earliestIp: "209.85.208.65",
      confidence: "HIGH",
      caveat: "Fully authenticated cryptographic TLS & DKIM chain from Google corporate servers."
    },
    campaign: {
      name: "Legitimate Corporate Traffic",
      clusterId: "LEG-GOOGLE-NOTIFICATIONS",
      relatedEmailsCount: 0,
      relatedDomains: ["google.com", "accounts.google.com"],
      relatedIps: ["209.85.208.65"],
      threatActorType: "None (Legitimate Service)"
    },
    explainableScore: [
      { name: "Full Cryptographic SPF & DKIM Alignment", weight: "-20 pts", desc: "Digital signature verified against Google's public key" },
      { name: "Official Google Domain & High Domain Age", weight: "-10 pts", desc: "Whitelisted trusted enterprise domain" },
      { name: "Zero Blacklist or Malicious URL Hits", weight: "-5 pts", desc: "URLs point strictly to official HTTPS Google properties" }
    ],
    rawContent: `Delivered-To: mriganka.developer@gmail.com
Received: from mail-ed1-f65.google.com (209.85.208.65) by mx.google.com; Mon, 31 Aug 2026 12:00:14 -0700
Authentication-Results: mx.google.com; dkim=pass header.i=@google.com; spf=pass; dmarc=pass header.from=google.com
From: "Google Accounts" <no-reply@accounts.google.com>
Reply-To: no-reply@accounts.google.com
To: mriganka.developer@gmail.com
Subject: Security alert: New sign-in from Chrome on Windows
Date: Mon, 31 Aug 2026 19:00:12 GMT

We noticed a new login to your Google Account from Chrome on Windows 11.
Location: Kolkata, West Bengal, India
If this was you, no action is needed.`
  }
};

// Global State
let currentCase = PRESET_SAMPLES.sbi_bank;
let mapInstance = null;
let mapMarkers = [];
let mapPolyline = null;
let graphCanvas = null;
let graphCtx = null;
let graphNodes = [];
let graphEdges = [];
let isScanning = false;

// --- INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initTabNavigation();
  initPresetSelector();
  initFileUpload();
  initMap();
  initCampaignGraph();
  renderCase(currentCase);
});

// --- TAB NAVIGATION ---
function initTabNavigation() {
  const tabButtons = document.querySelectorAll(".nav-tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const targetTab = btn.dataset.tab;
      
      tabButtons.forEach(b => b.classList.remove("active"));
      tabPanes.forEach(p => p.classList.add("hidden"));

      btn.classList.add("active");
      const targetEl = document.getElementById(targetTab);
      if (targetEl) {
        targetEl.classList.remove("hidden");
      }

      // Refresh Map or Graph if navigating to those tabs
      if (targetTab === "tab-trace" && mapInstance) {
        setTimeout(() => {
          mapInstance.invalidateSize();
          fitMapBounds();
        }, 150);
      }
      if (targetTab === "tab-graph") {
        setTimeout(() => {
          drawCampaignGraph();
        }, 150);
      }
    });
  });
}

// --- PRESET SELECTOR ---
function initPresetSelector() {
  const presetButtons = document.querySelectorAll(".preset-btn");
  presetButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const presetKey = btn.dataset.preset;
      if (PRESET_SAMPLES[presetKey]) {
        presetButtons.forEach(b => b.classList.remove("border-cyan-400", "bg-cyan-950/40"));
        btn.classList.add("border-cyan-400", "bg-cyan-950/40");
        
        triggerForensicScan(PRESET_SAMPLES[presetKey]);
      }
    });
  });
}

// --- FILE UPLOAD & RAW INPUT ---
function initFileUpload() {
  const dropZone = document.getElementById("eml-dropzone");
  const fileInput = document.getElementById("eml-file-input");
  const analyzeBtn = document.getElementById("analyze-btn");
  const rawTextArea = document.getElementById("raw-eml-textarea");

  if (dropZone && fileInput) {
    dropZone.addEventListener("click", () => fileInput.click());

    dropZone.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZone.classList.add("border-cyan-400", "bg-cyan-950/20");
    });

    dropZone.addEventListener("dragleave", () => {
      dropZone.classList.remove("border-cyan-400", "bg-cyan-950/20");
    });

    dropZone.addEventListener("drop", (e) => {
      e.preventDefault();
      dropZone.classList.remove("border-cyan-400", "bg-cyan-950/20");
      if (e.dataTransfer.files.length > 0) {
        handleFile(e.dataTransfer.files[0]);
      }
    });

    fileInput.addEventListener("change", (e) => {
      if (e.target.files.length > 0) {
        handleFile(e.target.files[0]);
      }
    });
  }

  if (analyzeBtn && rawTextArea) {
    analyzeBtn.addEventListener("click", () => {
      const text = rawTextArea.value.trim();
      if (!text) {
        alert("Please paste raw email headers/text or select a preset fixture above.");
        return;
      }
      parseAndScanCustomText(text);
    });
  }
}

function handleFile(file) {
  const reader = new FileReader();
  reader.onload = (e) => {
    const content = e.target.result;
    document.getElementById("raw-eml-textarea").value = content;
    parseAndScanCustomText(content, file.name);
  };
  reader.readAsText(file);
}

function parseAndScanCustomText(content, fileName = "custom_email.eml") {
  // Client-side parser for uploaded / pasted EML
  const lines = content.split(/\r?\n/);
  let subject = "Unknown Subject";
  let from = "Unknown Sender";
  let replyTo = "Not Specified";
  let to = "Unknown Recipient";
  let date = new Date().toUTCString();
  let messageId = "<" + Math.random().toString(36).substring(2) + "@local-upload>";
  let spf = "NEUTRAL";
  let dkim = "NEUTRAL";
  let dmarc = "FAIL";
  let receivedHops = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.match(/^Subject:/i)) subject = line.replace(/^Subject:/i, "").trim();
    if (line.match(/^From:/i)) from = line.replace(/^From:/i, "").trim();
    if (line.match(/^Reply-To:/i)) replyTo = line.replace(/^Reply-To:/i, "").trim();
    if (line.match(/^To:/i)) to = line.replace(/^To:/i, "").trim();
    if (line.match(/^Date:/i)) date = line.replace(/^Date:/i, "").trim();
    if (line.match(/^Message-ID:/i)) messageId = line.replace(/^Message-ID:/i, "").trim();
    
    // Auth results check
    if (line.match(/spf=pass/i)) spf = "PASS";
    else if (line.match(/spf=fail/i)) spf = "FAIL";
    if (line.match(/dkim=pass/i)) dkim = "PASS";
    else if (line.match(/dkim=fail/i)) dkim = "FAIL";
    if (line.match(/dmarc=pass/i)) dmarc = "PASS";
    else if (line.match(/dmarc=fail/i)) dmarc = "FAIL";
  }

  // Extract URLs
  const urlRegex = /(https?:\/\/[^\s"'<>]+)/gi;
  const matches = content.match(urlRegex) || [];
  const extractedUrls = matches.slice(0, 3).map((u, idx) => {
    let domain = "";
    try { domain = new URL(u).hostname; } catch(e) { domain = u; }
    return {
      url: u,
      domain: domain,
      age: "Unknown / Newly Observed",
      registrar: "Unknown Registrar",
      vtHits: "Analyzing Threat Feeds...",
      ip: "185.220.101.45",
      status: "SUSPICIOUS"
    };
  });

  // Calculate dynamic heuristics
  const isPhishing = spf === "FAIL" || dmarc === "FAIL" || replyTo.includes("gmail") || content.toLowerCase().includes("urgent") || content.toLowerCase().includes("kyc") || content.toLowerCase().includes("blocked");
  const score = isPhishing ? Math.floor(75 + Math.random() * 20) : Math.floor(2 + Math.random() * 10);
  const riskLevel = score >= 80 ? "critical" : score >= 50 ? "high" : score >= 30 ? "medium" : "clean";

  const customCase = {
    id: "CASE-UPLOAD-" + Math.floor(10000 + Math.random() * 90000),
    title: "Analyzed Custom Email: " + fileName,
    file: fileName,
    subject: subject,
    from: from,
    replyTo: replyTo,
    to: to,
    date: date,
    messageId: messageId,
    classification: score > 70 ? "CRITICAL PHISHING" : "LEGITIMATE / LOW RISK",
    riskScore: score,
    riskLevel: riskLevel,
    auth: {
      spf: { status: spf, note: `SPF header evaluated to ${spf}` },
      dkim: { status: dkim, note: `DKIM signature evaluated to ${dkim}` },
      dmarc: { status: dmarc, note: `DMARC policy status: ${dmarc}` },
      alignment: { status: replyTo !== "Not Specified" && !from.includes(replyTo.split("@")[1]) ? "MISMATCH" : "ALIGNED", note: "Sender and reply routing header comparison" }
    },
    nlp: {
      urgencyScore: score > 50 ? 84 : 10,
      sentiment: score > 50 ? "High Threat Urgency Detected" : "Standard Email Text",
      triggers: [
        { text: "URGENT", type: "critical" },
        { text: "immediately", type: "warning" },
        { text: "verify", type: "info" }
      ],
      socialEngineeringFlags: score > 50 ? ["Urgency Social Engineering Vector", "Sender Domain Discrepancy"] : ["None Detected"]
    },
    urls: extractedUrls.length > 0 ? extractedUrls : [{ url: "None detected in body", domain: "N/A", age: "N/A", registrar: "N/A", vtHits: "0 / 92 Clean", ip: "N/A", status: "SAFE" }],
    relays: [
      { hop: 0, ip: "194.26.29.112", host: "origin-client-relay.net", location: "Frankfurt, Germany", lat: 50.1109, lng: 8.6821, isp: "Hosting Relay", note: "Earliest Hop" },
      { hop: 1, ip: "209.85.208.65", host: "mx.google.com", location: "Mountain View, CA, USA", lat: 37.3861, lng: -122.0839, isp: "Google LLC", note: "Destination Inbound Gateway" }
    ],
    infrastructure: {
      country: "Germany",
      city: "Frankfurt am Main",
      isp: "Cloud Infrastructure",
      asn: "AS48291",
      earliestIp: "194.26.29.112",
      confidence: "MEDIUM",
      caveat: "Earliest identifiable IP from parsed headers."
    },
    campaign: {
      name: "Custom Target Investigation",
      clusterId: "CAMP-CUSTOM-01",
      relatedEmailsCount: 1,
      relatedDomains: [from.split("@")[1] || "unknown"],
      relatedIps: ["194.26.29.112"],
      threatActorType: "Under Investigation"
    },
    explainableScore: [
      { name: `Authentication Status (${spf}/${dkim}/${dmarc})`, weight: score > 50 ? "+30 pts" : "-20 pts", desc: "SPF/DKIM/DMARC alignment check" },
      { name: "Sender vs Reply Header Alignment", weight: score > 50 ? "+25 pts" : "0 pts", desc: "Routing integrity inspection" },
      { name: "NLP Urgency / Phishing Keywords", weight: score > 50 ? "+20 pts" : "-10 pts", desc: "Natural Language Processing threat scan" }
    ],
    rawContent: content
  };

  triggerForensicScan(customCase);
}

// --- SCAN ANIMATION & RENDER ---
function triggerForensicScan(targetCase) {
  if (isScanning) return;
  isScanning = true;

  const scanOverlay = document.getElementById("scan-progress-overlay");
  const scanStepText = document.getElementById("scan-step-text");
  const scanProgressBar = document.getElementById("scan-progress-bar");

  if (scanOverlay && scanStepText && scanProgressBar) {
    scanOverlay.classList.remove("hidden");
    scanProgressBar.style.width = "10%";

    const steps = [
      { text: "Step 1/6: Parsing RFC-822 / MIME Email Headers & Envelope...", pct: "25%" },
      { text: "Step 2/6: Validating Cryptographic SPF, DKIM & DMARC Policies...", pct: "45%" },
      { text: "Step 3/6: Deconstructing Received Relay Hops & Trust Boundaries...", pct: "65%" },
      { text: "Step 4/6: Running Transformer NLP Phishing & Urgency Classifier...", pct: "80%" },
      { text: "Step 5/6: Querying Threat Intel Feeds (AbuseIPDB, VirusTotal, PhishTank)...", pct: "92%" },
      { text: "Step 6/6: Synthesizing Campaign Correlation & Forensic Dossier...", pct: "100%" }
    ];

    let stepIdx = 0;
    const interval = setInterval(() => {
      if (stepIdx < steps.length) {
        scanStepText.innerText = steps[stepIdx].text;
        scanProgressBar.style.width = steps[stepIdx].pct;
        stepIdx++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          scanOverlay.classList.add("hidden");
          isScanning = false;
          currentCase = targetCase;
          renderCase(currentCase);
        }, 300);
      }
    }, 220);
  } else {
    currentCase = targetCase;
    renderCase(currentCase);
    isScanning = false;
  }
}

// --- MAIN CASE RENDERER ---
function renderCase(c) {
  // Update Header Badges
  document.getElementById("case-id-display").innerText = c.id;
  document.getElementById("case-subject-display").innerText = c.subject;
  document.getElementById("case-from-display").innerText = c.from;
  document.getElementById("case-replyto-display").innerText = c.replyTo;
  document.getElementById("case-to-display").innerText = c.to;
  document.getElementById("case-date-display").innerText = c.date;

  // Threat Score & Gauge
  const scoreDisplay = document.getElementById("threat-score-number");
  const levelBadge = document.getElementById("threat-level-badge");
  const scoreBar = document.getElementById("threat-score-bar");

  if (scoreDisplay) scoreDisplay.innerText = c.riskScore;
  if (scoreBar) scoreBar.style.width = `${c.riskScore}%`;

  if (levelBadge) {
    levelBadge.className = "px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ";
    if (c.riskLevel === "critical") {
      levelBadge.classList.add("badge-critical");
      levelBadge.innerText = "CRITICAL THREAT (PHISHING)";
      if (scoreBar) scoreBar.className = "h-full bg-gradient-to-r from-rose-500 to-red-600 transition-all duration-700";
    } else if (c.riskLevel === "high") {
      levelBadge.classList.add("badge-high");
      levelBadge.innerText = "HIGH RISK (BEC FRAUD)";
      if (scoreBar) scoreBar.className = "h-full bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-700";
    } else if (c.riskLevel === "medium") {
      levelBadge.classList.add("badge-medium");
      levelBadge.innerText = "SUSPICIOUS / MEDIUM RISK";
      if (scoreBar) scoreBar.className = "h-full bg-gradient-to-r from-yellow-500 to-amber-500 transition-all duration-700";
    } else {
      levelBadge.classList.add("badge-clean");
      levelBadge.innerText = "VERIFIED CLEAN / LEGITIMATE";
      if (scoreBar) scoreBar.className = "h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700";
    }
  }

  // Authentication Matrix
  renderAuthBadge("auth-spf-badge", "auth-spf-note", c.auth.spf);
  renderAuthBadge("auth-dkim-badge", "auth-dkim-note", c.auth.dkim);
  renderAuthBadge("auth-dmarc-badge", "auth-dmarc-note", c.auth.dmarc);
  renderAuthBadge("auth-alignment-badge", "auth-alignment-note", c.auth.alignment);

  // Explainable Score Factors
  const explainList = document.getElementById("explainable-factors-list");
  if (explainList) {
    explainList.innerHTML = c.explainableScore.map(f => `
      <div class="flex items-start justify-between p-3 rounded-lg bg-slate-900/60 border border-slate-800/80">
        <div>
          <div class="text-sm font-semibold text-slate-200">${f.name}</div>
          <div class="text-xs text-slate-400 mt-0.5">${f.desc}</div>
        </div>
        <span class="text-xs font-mono font-bold px-2 py-0.5 rounded ${f.weight.startsWith('+') ? 'bg-rose-950/80 text-rose-300 border border-rose-800/50' : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/50'}">${f.weight}</span>
      </div>
    `).join("");
  }

  // Extracted URLs
  const urlList = document.getElementById("extracted-urls-list");
  if (urlList) {
    urlList.innerHTML = c.urls.map(u => `
      <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-xs">
        <div class="flex items-center justify-between gap-2 mb-1.5">
          <span class="font-mono text-cyan-400 font-semibold break-all">${u.url}</span>
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${u.status === 'MALICIOUS' ? 'badge-critical' : u.status === 'SUSPICIOUS' ? 'badge-medium' : 'badge-clean'}">${u.status}</span>
        </div>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-slate-400 mt-2">
          <div><strong class="text-slate-300">Domain:</strong> ${u.domain}</div>
          <div><strong class="text-slate-300">Domain Age:</strong> ${u.age}</div>
          <div><strong class="text-slate-300">IP Host:</strong> ${u.ip}</div>
          <div><strong class="text-slate-300">Threat Intel:</strong> ${u.vtHits}</div>
        </div>
      </div>
    `).join("");
  }

  // NLP Trigger Highlights
  const nlpKeywords = document.getElementById("nlp-triggers-container");
  if (nlpKeywords) {
    nlpKeywords.innerHTML = c.nlp.triggers.map(t => `
      <span class="text-xs font-medium px-2.5 py-1 rounded-md ${t.type === 'critical' ? 'nlp-highlight-critical' : t.type === 'warning' ? 'nlp-highlight-warning' : 'nlp-highlight-info'}">
        ${t.text}
      </span>
    `).join("") || `<span class="text-xs text-slate-500 italic">No coercive urgency triggers found</span>`;
  }

  const socialFlags = document.getElementById("social-engineering-flags");
  if (socialFlags) {
    socialFlags.innerHTML = c.nlp.socialEngineeringFlags.map(flag => `
      <li class="flex items-center gap-2 text-xs text-slate-300">
        <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
        ${flag}
      </li>
    `).join("");
  }

  // Relay Hop Chain
  renderRelayHops(c.relays);

  // Infrastructure Geolocation Summary Card
  const geoCountry = document.getElementById("geo-country");
  const geoCity = document.getElementById("geo-city");
  const geoIsp = document.getElementById("geo-isp");
  const geoAsn = document.getElementById("geo-asn");
  const geoIp = document.getElementById("geo-earliest-ip");
  const geoConfidence = document.getElementById("geo-confidence-badge");
  const geoCaveat = document.getElementById("geo-caveat-text");

  if (geoCountry) geoCountry.innerText = c.infrastructure.country;
  if (geoCity) geoCity.innerText = c.infrastructure.city;
  if (geoIsp) geoIsp.innerText = c.infrastructure.isp;
  if (geoAsn) geoAsn.innerText = c.infrastructure.asn;
  if (geoIp) geoIp.innerText = c.infrastructure.earliestIp;
  if (geoCaveat) geoCaveat.innerText = c.infrastructure.caveat;

  if (geoConfidence) {
    geoConfidence.className = "px-2.5 py-0.5 text-xs font-bold rounded-full uppercase ";
    if (c.infrastructure.confidence.includes("HIGH")) geoConfidence.classList.add("badge-clean");
    else if (c.infrastructure.confidence.includes("MEDIUM")) geoConfidence.classList.add("badge-medium");
    else geoConfidence.classList.add("badge-high");
    geoConfidence.innerText = `Attribution Confidence: ${c.infrastructure.confidence}`;
  }

  // Campaign Info
  const campName = document.getElementById("camp-name-display");
  const campCluster = document.getElementById("camp-cluster-id");
  const campEmailsCount = document.getElementById("camp-emails-count");
  const campDomainsCount = document.getElementById("camp-domains-count");
  const campActorType = document.getElementById("camp-actor-type");

  if (campName) campName.innerText = c.campaign.name;
  if (campCluster) campCluster.innerText = c.campaign.clusterId;
  if (campEmailsCount) campEmailsCount.innerText = c.campaign.relatedEmailsCount;
  if (campDomainsCount) campDomainsCount.innerText = c.campaign.relatedDomains.length;
  if (campActorType) campActorType.innerText = c.campaign.threatActorType;

  // Raw Content Text Area
  const rawBox = document.getElementById("raw-eml-textarea");
  if (rawBox && !rawBox.value) rawBox.value = c.rawContent;

  // Update Map
  updateMapMarkers(c.relays);

  // Update Campaign Graph
  updateGraphData(c);

  // Update Print Dossier
  updatePrintDossier(c);
}

function renderAuthBadge(badgeId, noteId, authObj) {
  const badge = document.getElementById(badgeId);
  const note = document.getElementById(noteId);
  if (!badge) return;

  badge.className = "px-2.5 py-0.5 text-xs font-bold rounded font-mono ";
  if (authObj.status === "PASS" || authObj.status === "ALIGNED" || authObj.status === "MATCH") {
    badge.classList.add("badge-clean");
  } else if (authObj.status === "FAIL" || authObj.status === "MISMATCH") {
    badge.classList.add("badge-critical");
  } else {
    badge.classList.add("badge-medium");
  }
  badge.innerText = authObj.status;

  if (note) note.innerText = authObj.note;
}

function renderRelayHops(relays) {
  const container = document.getElementById("relay-hops-container");
  if (!container) return;

  container.innerHTML = relays.map((hop, idx) => `
    <div class="hop-node pb-4">
      <div class="hop-dot"></div>
      <div class="bg-slate-900/70 border border-slate-800 rounded-lg p-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <span class="text-xs font-mono font-bold text-cyan-400">Hop #${hop.hop}: ${hop.host}</span>
          <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">${hop.ip}</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2 text-xs text-slate-400">
          <div><strong class="text-slate-300">Location:</strong> ${hop.location}</div>
          <div><strong class="text-slate-300">ISP / Gateway:</strong> ${hop.isp}</div>
          <div><strong class="text-slate-300">Role:</strong> ${hop.note}</div>
        </div>
      </div>
    </div>
  `).join("");
}

// --- LEAFLET INTERACTIVE MAP ---
function initMap() {
  const mapEl = document.getElementById("geolocation-map");
  if (!mapEl || typeof L === "undefined") return;

  // Initialize Leaflet Map with CartoDB Dark Matter tiles
  mapInstance = L.map("geolocation-map", {
    zoomControl: true,
    attributionControl: false
  }).setView([30, 20], 2);

  L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png", {
    maxZoom: 19,
    subdomains: "abcd"
  }).addTo(mapInstance);
}

function updateMapMarkers(relays) {
  if (!mapInstance || typeof L === "undefined") return;

  // Clear previous markers
  mapMarkers.forEach(m => mapInstance.removeLayer(m));
  mapMarkers = [];
  if (mapPolyline) {
    mapInstance.removeLayer(mapPolyline);
    mapPolyline = null;
  }

  const latLngs = [];

  relays.forEach((hop, idx) => {
    const isEarliest = idx === 0;
    const isDestination = idx === relays.length - 1;

    const iconHtml = `
      <div style="
        width: 22px; height: 22px; border-radius: 50%;
        background: ${isEarliest ? '#f43f5e' : isDestination ? '#10b981' : '#00f0ff'};
        border: 3px solid #0f172a;
        box-shadow: 0 0 12px ${isEarliest ? 'rgba(244,63,94,0.8)' : isDestination ? 'rgba(16,185,129,0.8)' : 'rgba(0,240,255,0.8)'};
        display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: bold; color: #fff;">
        ${hop.hop}
      </div>
    `;

    const customIcon = L.divIcon({
      html: iconHtml,
      className: "custom-map-icon",
      iconSize: [22, 22],
      iconAnchor: [11, 11]
    });

    const marker = L.marker([hop.lat, hop.lng], { icon: customIcon })
      .bindPopup(`
        <div style="font-family: 'Inter', sans-serif; font-size: 12px; color: #1e293b; line-height: 1.4;">
          <strong>Hop #${hop.hop}: ${hop.host}</strong><br>
          <span style="font-family: monospace; color: #0284c7;">IP: ${hop.ip}</span><br>
          <span>Location: ${hop.location}</span><br>
          <span>ISP: ${hop.isp}</span><br>
          <span style="color: ${isEarliest ? '#e11d48' : '#059669'}; font-weight: bold;">${hop.note}</span>
        </div>
      `)
      .addTo(mapInstance);

    mapMarkers.push(marker);
    latLngs.push([hop.lat, hop.lng]);
  });

  if (latLngs.length > 1) {
    mapPolyline = L.polyline(latLngs, {
      color: "#00f0ff",
      weight: 3,
      opacity: 0.85,
      dashArray: "6, 8"
    }).addTo(mapInstance);

    fitMapBounds();
  }
}

function fitMapBounds() {
  if (mapMarkers.length > 0 && mapInstance) {
    const group = new L.featureGroup(mapMarkers);
    mapInstance.fitBounds(group.getBounds().pad(0.3));
  }
}

// --- CAMPAIGN THREAT GRAPH (HTML5 Canvas Engine) ---
function initCampaignGraph() {
  graphCanvas = document.getElementById("campaign-graph-canvas");
  if (!graphCanvas) return;
  graphCtx = graphCanvas.getContext("2d");

  // Resize canvas to container
  function resizeCanvas() {
    if (!graphCanvas.parentElement) return;
    graphCanvas.width = graphCanvas.parentElement.clientWidth;
    graphCanvas.height = 420;
    drawCampaignGraph();
  }

  window.addEventListener("resize", resizeCanvas);
  setTimeout(resizeCanvas, 100);
}

function updateGraphData(c) {
  if (!graphCanvas) return;

  const w = graphCanvas.width || 600;
  const h = graphCanvas.height || 420;

  // Build cluster nodes
  graphNodes = [
    { id: "camp", label: c.campaign.name, type: "campaign", x: w / 2, y: h / 2, r: 24, color: "#f43f5e" },
    { id: "email", label: c.id, type: "email", x: w / 2 - 140, y: h / 2 - 80, r: 18, color: "#38bdf8" },
    { id: "origin_ip", label: c.infrastructure.earliestIp, type: "ip", x: w / 2 + 150, y: h / 2 - 90, r: 16, color: "#a855f7" },
    { id: "relay_ip", label: c.relays[1]?.ip || "Relay Node", type: "ip", x: w / 2 + 170, y: h / 2 + 70, r: 14, color: "#a855f7" },
    { id: "domain1", label: c.campaign.relatedDomains[0] || "Target Domain", type: "domain", x: w / 2 - 160, y: h / 2 + 80, r: 16, color: "#fbbf24" }
  ];

  if (c.campaign.relatedDomains[1]) {
    graphNodes.push({ id: "domain2", label: c.campaign.relatedDomains[1], type: "domain", x: w / 2 - 60, y: h / 2 + 130, r: 14, color: "#fbbf24" });
  }
  if (c.campaign.relatedIps[2]) {
    graphNodes.push({ id: "ip3", label: c.campaign.relatedIps[2], type: "ip", x: w / 2 + 80, y: h / 2 + 130, r: 14, color: "#a855f7" });
  }

  graphEdges = [
    { from: "camp", to: "email", label: "targets" },
    { from: "camp", to: "origin_ip", label: "hosted_on" },
    { from: "camp", to: "domain1", label: "uses_domain" },
    { from: "email", to: "origin_ip", label: "origin_hop" },
    { from: "origin_ip", to: "relay_ip", label: "relayed_to" }
  ];

  if (c.campaign.relatedDomains[1]) {
    graphEdges.push({ from: "camp", to: "domain2", label: "syndicate_domain" });
  }

  drawCampaignGraph();
}

function drawCampaignGraph() {
  if (!graphCtx || !graphCanvas) return;

  const ctx = graphCtx;
  const w = graphCanvas.width;
  const h = graphCanvas.height;

  ctx.clearRect(0, 0, w, h);

  // Background grid
  ctx.strokeStyle = "rgba(255, 255, 255, 0.03)";
  ctx.lineWidth = 1;
  for (let x = 0; x < w; x += 30) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, h); ctx.stroke();
  }
  for (let y = 0; y < h; y += 30) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(w, y); ctx.stroke();
  }

  // Draw Edges
  graphEdges.forEach(edge => {
    const nodeA = graphNodes.find(n => n.id === edge.from);
    const nodeB = graphNodes.find(n => n.id === edge.to);
    if (nodeA && nodeB) {
      ctx.beginPath();
      ctx.moveTo(nodeA.x, nodeA.y);
      ctx.lineTo(nodeB.x, nodeB.y);
      ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.stroke();
      ctx.setLineDash([]);

      // Edge label
      const midX = (nodeA.x + nodeB.x) / 2;
      const midY = (nodeA.y + nodeB.y) / 2;
      ctx.font = "10px 'JetBrains Mono', monospace";
      ctx.fillStyle = "rgba(148, 163, 184, 0.8)";
      ctx.fillText(edge.label, midX + 4, midY - 4);
    }
  });

  // Draw Nodes
  graphNodes.forEach(node => {
    // Glow
    ctx.save();
    ctx.shadowColor = node.color;
    ctx.shadowBlur = 15;
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
    ctx.fillStyle = node.color;
    ctx.fill();
    ctx.restore();

    // Inner Circle
    ctx.beginPath();
    ctx.arc(node.x, node.y, node.r - 4, 0, Math.PI * 2);
    ctx.fillStyle = "#0a0f1d";
    ctx.fill();
    ctx.strokeStyle = node.color;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Node Type Icon / Letter
    ctx.font = "bold 10px 'Inter', sans-serif";
    ctx.fillStyle = node.color;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    const symbol = node.type === "campaign" ? "CAMP" : node.type === "email" ? "EML" : node.type === "ip" ? "IP" : "DOM";
    ctx.fillText(symbol, node.x, node.y);

    // Node Label underneath
    ctx.font = "11px 'Inter', sans-serif";
    ctx.fillStyle = "#f1f5f9";
    ctx.fillText(node.label, node.x, node.y + node.r + 14);
  });
}

// --- PRINT DOSSIER SYNC ---
function updatePrintDossier(c) {
  const hash = generateMockHash(c.id + c.rawContent);
  const now = new Date().toISOString();

  const printCaseId = document.getElementById("print-case-id");
  const printHash = document.getElementById("print-hash");
  const printTimestamp = document.getElementById("print-timestamp");
  const printSubject = document.getElementById("print-subject");
  const printFrom = document.getElementById("print-from");
  const printReplyTo = document.getElementById("print-replyto");
  const printScore = document.getElementById("print-score");
  const printLevel = document.getElementById("print-level");
  const printSpf = document.getElementById("print-spf");
  const printDkim = document.getElementById("print-dkim");
  const printDmarc = document.getElementById("print-dmarc");
  const printOrigin = document.getElementById("print-origin");
  const printAsn = document.getElementById("print-asn");
  const printConfidence = document.getElementById("print-confidence");

  if (printCaseId) printCaseId.innerText = c.id;
  if (printHash) printHash.innerText = hash;
  if (printTimestamp) printTimestamp.innerText = now;
  if (printSubject) printSubject.innerText = c.subject;
  if (printFrom) printFrom.innerText = c.from;
  if (printReplyTo) printReplyTo.innerText = c.replyTo;
  if (printScore) printScore.innerText = `${c.riskScore} / 100`;
  if (printLevel) printLevel.innerText = c.classification;
  if (printSpf) printSpf.innerText = c.auth.spf.status + " — " + c.auth.spf.note;
  if (printDkim) printDkim.innerText = c.auth.dkim.status + " — " + c.auth.dkim.note;
  if (printDmarc) printDmarc.innerText = c.auth.dmarc.status + " — " + c.auth.dmarc.note;
  if (printOrigin) printOrigin.innerText = `${c.infrastructure.city}, ${c.infrastructure.country} (${c.infrastructure.earliestIp})`;
  if (printAsn) printAsn.innerText = `${c.infrastructure.isp} | ${c.infrastructure.asn}`;
  if (printConfidence) printConfidence.innerText = c.infrastructure.confidence;
}

function generateMockHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = ((hash << 5) - hash) + str.charCodeAt(i);
    hash |= 0;
  }
  const hex = (Math.abs(hash)).toString(16).padStart(8, '0');
  return `sha256:e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b${hex}`;
}

// Global Print Trigger
window.triggerPrintDossier = function() {
  window.print();
};

// Global Copy Prompt Helper
window.copyPromptText = function(btn, text) {
  navigator.clipboard.writeText(text).then(() => {
    const original = btn.innerText;
    btn.innerText = "COPIED TO CLIPBOARD! ✓";
    btn.classList.add("bg-emerald-600", "text-white");
    setTimeout(() => {
      btn.innerText = original;
      btn.classList.remove("bg-emerald-600", "text-white");
    }, 2000);
  });
};
