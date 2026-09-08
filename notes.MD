# GTM Operating System

## 1. What are we building?

We should build an **operating system for enterprise GTM teams**.

The product is for companies that sell complex products to enterprise customers, where closing and delivering a customer requires multiple teams to work together: sales, pre-sales, solutions, customer success, delivery, product and engineering.

Today, most GTM software focuses on the **top of the funnel**: finding prospects, enriching leads, sending outbound messages, scoring leads and automating SDR workflows.

The problem we are targeting starts **after a customer becomes a serious opportunity**.

Once an enterprise opportunity is qualified, a large amount of work begins:

* understanding the customer's requirements;
* responding to an RFP;
* preparing a commercial proposal;
* deciding pricing;
* creating a solution design;
* creating a project plan;
* preparing a statement of work;
* coordinating with delivery and product teams;
* onboarding the customer;
* tracking whether the customer is succeeding;
* identifying expansion opportunities;
* feeding customer feedback back into the product.

This work is highly manual, distributed across people and tools, and heavily dependent on the experience of individual team members.

The thesis is that this part of the enterprise GTM process should work more like a **software engineering organization**: there should be a shared system, shared knowledge, reusable artifacts, clear workflows, versioning, quality checks and agents that continuously work on behalf of the team.

**The principle is: build the operating system for everything that happens after an enterprise opportunity becomes real.**

---

## 2. Why is this a problem worth solving?

Enterprise GTM work is fundamentally a **knowledge and coordination problem**.

A salesperson might know how to sell to an insurance company.

A solutions person might know how to structure a particular type of deployment.

A delivery person might know what implementation plan usually works.

Another person might know the right pricing strategy.

But most of this knowledge lives inside people's heads, old proposals, Slack conversations, spreadsheets and documents.

There is no single system that captures this knowledge and makes it available to the next person doing the same work.

As a result, the quality of the output depends heavily on **who is doing the work**.

Two people responding to the same customer can produce very different proposals.

Two delivery teams working on similar customers can create different processes and documentation.

A salesperson may spend hours figuring out the latest pricing or finding an example proposal that someone else created six months ago.

The organization keeps rediscovering the same knowledge.

This gets worse as the company grows.

Hiring more people increases capacity, but it also increases the amount of coordination and knowledge transfer required.

**The problem is not simply that GTM teams need more software. The problem is that the organization has no shared operating system for doing the work.**

---

## 3. Why compare this to software engineering?

Software engineering already has a model for collaborative knowledge work.

Engineers work from a common codebase.

There is a standard process for making changes.

There are pull requests.

There are reviews.

There are tests.

There is version history.

There is a clear understanding of what is currently in production.

Most enterprise GTM organizations have none of this.

A proposal might exist as a Word document.

A better proposal might be sitting in someone's Google Drive.

Pricing might exist in a spreadsheet.

The latest customer requirements might be in Slack.

The solution architecture might be in another document.

And the reasoning behind an important decision might only exist in someone's head.

There is no equivalent of a **common codebase for GTM work**.

We should create one.

The equivalent of a codebase would be a shared system containing:

* customer knowledge;
* company knowledge;
* proposals;
* RFP responses;
* pricing;
* solution patterns;
* implementation plans;
* statements of work;
* customer requirements;
* delivery learnings;
* industry-specific best practices;
* product feedback;
* revenue and account information.

Agents can then work on top of this system and continuously improve it.

**The principle is: GTM teams should have a shared codebase for how the company sells and delivers.**

---

## 4. What does a typical enterprise customer journey look like?

Consider a typical enterprise deal.

### Step 1: RFP

An RFP arrives.

The team needs to determine:

* Is this customer a good fit?
* Have we solved this problem before?
* Which previous proposals are relevant?
* What should our response say?
* Which requirements can we actually support?
* What information is missing?

Today, this usually involves people searching through old documents, asking colleagues questions and manually assembling the response.

### Step 2: Solutioning

Once the opportunity is qualified, the team needs to understand the customer's requirements and design a solution.

This may involve sales, pre-sales, solutions engineering, delivery and product.

The output could include:

* solution documents;
* technical architecture;
* implementation plan;
* scope;
* assumptions;
* dependencies;
* timelines.

Again, much of this work starts from scratch.

### Step 3: Commercial proposal

The company then prepares a proposal covering:

* scope;
* pricing;
* commercial terms;
* project plan;
* expected outcomes.

Pricing and commercial strategy can be particularly difficult because the latest information may not be centrally available.

### Step 4: Statement of Work

Once the customer agrees to move forward, the team creates the SOW.

This defines:

* what is in scope;
* what is out of scope;
* project phases;
* responsibilities;
* deliverables;
* timelines;
* commercial assumptions.

### Step 5: Delivery

The customer is now being implemented.

The delivery team needs to coordinate work, track risks, communicate with the customer, collect feedback and make sure the project stays on track.

### Step 6: Customer success and expansion

Once the customer is live, the company needs to understand:

* Is the customer succeeding?
* Is usage increasing?
* What problems are they facing?
* What should we build for them?
* Are there expansion opportunities?
* What needs to happen to get the account to the next revenue milestone?

This entire journey is currently spread across different systems and teams.

**The opportunity is to connect the entire journey into one operating system.**

---

## 5. What is broken in the current workflow?

There are three fundamental problems.

### 1. Knowledge is fragmented

The information required to do the work is spread across:

* CRM;
* Slack;
* email;
* Google Drive;
* SharePoint;
* spreadsheets;
* dashboards;
* individual people's knowledge.

Finding the right information is often harder than doing the actual work.

### 2. Output quality is inconsistent

There is no standardized way to produce a good proposal, solution document, RFP response or SOW.

The quality depends on the person doing the work.

A strong employee creates a strong artifact.

A less experienced employee creates a weaker artifact.

The organization does not have a systematic way of transferring expertise from one person to another.

### 3. There is no feedback loop

The organization learns from every customer, but these learnings are rarely captured systematically.

A good solution pattern might be discovered on customer A.

That knowledge might help customer B.

But unless someone explicitly documents it, the organization has to rediscover it.

Over time, this creates a huge amount of duplicated work.

**The system should turn every customer interaction into organizational knowledge that makes the next customer easier to serve.**

---

## 6. What would the product actually do?

The initial product would be a **set of long-horizon agents connected to the company's existing GTM systems**.

The agents would not replace the existing workflow immediately.

They would sit inside it and gradually take over repetitive coordination and knowledge work.

For example:

### RFP Agent

When an RFP arrives, the agent can:

* identify whether the opportunity fits;
* find relevant previous RFP responses;
* identify similar customers;
* draft responses;
* identify gaps;
* flag questions that need human input;
* check the response against company best practices.

### Proposal Agent

The agent can help create a commercial proposal using:

* customer requirements;
* previous proposals;
* approved pricing;
* relevant solution patterns;
* industry knowledge;
* implementation requirements.

It can also flag inconsistencies before the proposal goes to the customer.

### Solutioning Agent

The agent can help the solutions team create:

* solution designs;
* architecture documents;
* implementation plans;
* requirements documents;
* technical assumptions.

It can reuse patterns from previous successful implementations.

### Delivery Agent

Once the deal is closed, the same system continues with the customer.

It can:

* maintain project documentation;
* track action items;
* identify risks;
* prepare customer updates;
* monitor milestones;
* summarize meetings;
* track open requirements.

### Account Agent

At the account level, the agent can monitor:

* revenue;
* usage;
* growth;
* product adoption;
* open issues;
* expansion opportunities;
* customer health.

It can answer:

> What needs to happen for this customer to reach $1M ARR?

And then continuously track progress against that goal.

---

## 7. How does the system get smarter over time?

This is an important part of the thesis.

The product should not simply be a collection of agents.

The agents should continuously contribute to a **shared organizational knowledge base**.

For example, suppose a company discovers that a particular proposal structure works extremely well for insurance companies.

The system should capture that.

The next time someone works on an insurance customer, the system should automatically use that knowledge.

Similarly, suppose a delivery team discovers that a particular implementation pattern consistently causes problems.

That learning should become part of the standard delivery process.

Over time, the company develops a continuously improving operating system containing:

* best practices;
* successful proposals;
* successful solution patterns;
* pricing patterns;
* implementation patterns;
* industry knowledge;
* customer objections;
* product requirements;
* delivery learnings.

The system becomes better because **every customer creates new organizational knowledge**.

---

## 8. What is the equivalent of "version control" for GTM?

This is one of the most important ideas in the product.

We should treat important GTM artifacts like software code.

For example, suppose the company has a standard proposal for insurance customers.

Instead of having 15 different versions floating around, the system should know:

* what the current approved version is;
* who changed it;
* what changed;
* why it changed;
* which customer learnings caused the change;
* which people approved the change.

The same principle can apply to:

* pricing;
* proposal templates;
* RFP responses;
* solution patterns;
* SOW templates;
* implementation processes;
* customer communication templates.

This creates a **version-controlled GTM organization**.

The company can finally answer:

> What is the current best way we know how to do this?

And:

> Why do we believe this is the best way?

---

## 9. How does this connect to the CRM?

The CRM should remain the system of record for the customer relationship.

For example, HubSpot or Salesforce should continue to contain:

* accounts;
* contacts;
* opportunities;
* deal stages;
* revenue;
* customer information.

The GTM operating system sits on top of this.

It connects the CRM with the actual work happening across the organization.

An agent could automatically detect that a salesperson is communicating with a new customer over email and:

* identify the contact;
* create or update the CRM record;
* attach relevant context;
* summarize the conversation;
* identify next steps;
* recommend documents to send;
* update the opportunity.

The salesperson should not have to spend time maintaining the system of record.

**The agent should maintain the system while the human focuses on the customer.**

---

## 10. What would the first version look like?

I would not start by building a large standalone application.

The first version should fit into the workflows teams already use.

For example:

### Slack

A project Slack channel gets an agent.

The agent:

* tracks decisions;
* maintains project documentation;
* summarizes meetings;
* tracks action items;
* answers questions about the project;
* keeps the project knowledge current.

### Email

A sales agent sits alongside email.

When a salesperson communicates with a customer, it can:

* update the CRM;
* identify contacts;
* summarize conversations;
* recommend responses;
* retrieve relevant documents;
* identify next steps.

### CRM

The agent continuously maintains the customer record.

### Internal knowledge

The system continuously learns from:

* proposals;
* RFPs;
* customer calls;
* delivery documents;
* pricing;
* project outcomes.

The initial product is therefore **a set of agents embedded in the existing workflow**.

The application comes later.

---

## 11. What does the eventual product look like?

Over time, the product becomes a dedicated GTM operating system.

There would be different views for different levels of the organization.

### Individual view

A salesperson or delivery person sees:

* today's priorities;
* active customers;
* tasks;
* risks;
* relevant context;
* recommended actions.

### Account view

A customer team sees:

* revenue;
* usage;
* customer health;
* current projects;
* open issues;
* expansion opportunities;
* next actions.

### Pod / team view

A team leader sees:

* revenue target;
* current run rate;
* pipeline;
* account health;
* delivery risks;
* gaps to target;
* actions required.

### Company view

Leadership sees:

* total GTM performance;
* revenue;
* pipeline;
* customer health;
* delivery capacity;
* major risks;
* product feedback;
* where the organization is falling short of its goals.

This starts looking less like a CRM and more like an **operating system for running the entire GTM organization**.

---

## 12. What makes this different from existing GTM software?

Most GTM software focuses on **creating more opportunities**.

For example:

* finding leads;
* enriching leads;
* outbound;
* automated SDR;
* lead scoring;
* prospect research.

Those are important, but they are mostly top-of-funnel problems.

Our focus is the much more complex workflow that happens **after a serious enterprise opportunity exists**.

That includes:

**Opportunity → RFP → Solution → Proposal → Pricing → SOW → Delivery → Customer Success → Expansion**

This is where multiple teams have to coordinate and where a large amount of institutional knowledge is required.

The opportunity is to build the infrastructure for that entire process.

---

## 13. Why can't companies just give everyone Claude or another general-purpose AI agent?

They can, and this will solve part of the problem.

An employee can use Claude, ChatGPT or another agent to:

* write a proposal;
* analyze revenue;
* summarize customer conversations;
* create a report;
* build a document.

But this remains primarily **individual productivity software**.

The problem is that the work is not standardized across the organization.

One employee creates a useful workflow.

Another employee creates a different workflow.

Someone builds a useful prompt.

Someone else has a better one.

The knowledge remains fragmented.

The bigger opportunity is to move from:

> Every employee has an AI assistant.

to:

> The entire GTM organization has an AI operating system.

The difference is that the second system has:

* shared organizational memory;
* standardized workflows;
* shared agents;
* company-wide knowledge;
* versioned artifacts;
* quality checks;
* permissions;
* organizational metrics;
* feedback loops.

The unit of automation is therefore not the employee.

**The unit of automation is the department.**

---

## 14. Where is the proprietary value?

The proprietary value should not be the underlying AI model.

Models will continue to improve and become interchangeable.

The defensible asset is the **company-specific operating layer around the models**.

That includes:

* the company's knowledge base;
* customer history;
* successful proposals;
* pricing decisions;
* solution patterns;
* delivery learnings;
* evaluation datasets;
* workflows;
* approval processes;
* agent skills;
* organizational context;
* feedback loops.

Over time, the system develops an increasingly detailed understanding of **how this particular company sells and delivers**.

That is difficult to recreate because it is accumulated through actual work.

**The principle is: the defensible asset is not the AI model; it is the organizational operating system built around the model.**

---

## 15. What is the initial wedge?

The strongest initial wedge is likely companies that:

* sell to enterprises;
* have relatively complex sales cycles;
* require solutioning or implementation;
* have sales + pre-sales + delivery/customer success teams;
* sell a product that requires customization;
* have significant institutional knowledge trapped inside individuals.

This is particularly relevant for companies such as enterprise AI, infrastructure, SaaS, fintech, cybersecurity and other businesses where closing a customer involves substantial solutioning and delivery work.

For these companies, the value of improving the process is high because every enterprise deal can represent significant revenue.

The product does not need to solve all GTM problems on day one.

It can start with one painful workflow, such as **RFP → proposal → solutioning**, and then expand across the customer lifecycle.

---

## 16. Why start with solutioning rather than the top of the funnel?

The top of the funnel is already crowded.

There are many companies working on:

* prospecting;
* enrichment;
* outbound;
* lead scoring;
* SDR automation.

More importantly, the economics of the problem are different.

If an enterprise company spends several weeks solutioning a large customer, getting that process from three weeks to three days can have a meaningful impact on revenue capacity.

It allows the same team to handle more opportunities without proportionally increasing headcount.

It also creates a natural expansion path:

**Solutioning → Sales → Delivery → Customer Success → Expansion**

Once the system owns this workflow, it can move further upstream into pipeline generation and further downstream into account management.

---

## 17. What is the long-term vision?

The long-term vision is bigger than a GTM assistant.

It is an **operating system for how a company runs**.

Today, software engineering has its own operating system:

* Git;
* code repositories;
* CI/CD;
* tickets;
* monitoring;
* deployment systems.

GTM can have an equivalent system:

* customer knowledge;
* proposals;
* pricing;
* RFPs;
* solution designs;
* delivery plans;
* customer health;
* revenue;
* product feedback;
* agents.

Eventually the same concept can extend to other functions:

* finance;
* HR;
* operations;
* customer support;
* product;
* procurement.

The ultimate vision is a company where AI agents do not simply help individual employees.

**Agents operate alongside the organization as persistent members of each function, carrying context across months of work and continuously improving the company's operating system.**

---

## 18. How does this change the relationship between GTM and product?

There is another important advantage.

Today, customer feedback is often disconnected from product development.

Sales hears one thing.

Delivery hears another.

Customer success sees something else.

Product teams receive fragmented feedback through Slack, meetings and tickets.

The operating system can create a common feedback loop.

Every customer interaction can be connected to:

* a customer;
* a problem;
* a feature request;
* revenue impact;
* frequency across customers;
* current product capability.

The system can then identify patterns.

For example:

> Five enterprise customers are asking for the same capability.

Or:

> This missing feature is blocking $3M of pipeline.

Or:

> Customers in insurance consistently struggle with this part of the product.

This creates a much stronger connection between **what customers are asking for and what product teams build**.

The product roadmap can therefore be connected directly to commercial impact.

---

## 19. What are the biggest risks?

### Risk 1: The market already has many point solutions

There are products for CRM, sales intelligence, prospecting, proposal generation, customer success, project management and AI agents.

The risk is that the market becomes too fragmented to support a new horizontal platform.

The response is to start with a very specific workflow and prove that the system can become the shared operating layer across it.

### Risk 2: Every company works differently

A GTM process at one company may look completely different from another.

The product therefore cannot be completely rigid.

The common layer should be the infrastructure:

* knowledge;
* workflows;
* agents;
* permissions;
* versioning;
* evaluation;
* integrations.

The company-specific layer should be the actual processes and skills.

### Risk 3: Users may simply use general-purpose AI

This is probably the biggest product risk.

If employees can accomplish 80% of the work by using Claude or ChatGPT with company documents, the dedicated product needs to provide a much stronger organizational benefit.

That means the product must own the **workflow and system of record**, not just generation.

### Risk 4: The product could become a services business

Enterprise GTM processes are messy.

There is a risk of building custom workflows for every customer.

The product needs to identify the common primitives and build a platform around them rather than repeatedly implementing bespoke workflows.

---

## 20. What should we build first?

I would start very narrowly.

The first version could focus on:

**RFP → Solutioning → Proposal**

This workflow has:

* high frequency;
* high value;
* significant manual work;
* lots of reusable knowledge;
* multiple people involved;
* clear outputs;
* clear quality criteria.

The first product could:

1. ingest the company's existing proposals, RFPs and solution documents;
2. build a company-specific knowledge base;
3. connect to Slack, email and CRM;
4. identify the relevant context for a new opportunity;
5. generate a first draft;
6. identify missing information;
7. check the output against company standards;
8. route it to the right people for approval;
9. capture the final version;
10. learn from the outcome.

Once this works, we expand into SOWs, delivery, customer success and account management.

---

## 21. What does success look like?

The product should ultimately change the economics of the GTM organization.

We should measure things such as:

* time from opportunity to proposal;
* time from RFP to response;
* proposal quality;
* proposal win rate;
* time spent by sales and solutions teams;
* number of opportunities handled per employee;
* delivery efficiency;
* customer expansion;
* time required to onboard new GTM employees;
* percentage of work completed using standardized company knowledge.

The strongest signal would be:

> **Can the same GTM organization close and deliver significantly more enterprise revenue without proportionally increasing headcount?**

If the answer is yes, we have built something valuable.

---

## 22. So what is the one-line thesis?

We are building **the operating system for enterprise GTM teams**.

Today, software engineers have a shared system for writing and shipping software.

Enterprise GTM teams do not have an equivalent system for selling, solutioning and delivering to customers.

We want to build that system.

It starts as a set of AI agents embedded in existing workflows.

It evolves into a shared company knowledge base and workflow engine.

And over time, it becomes the system through which the entire GTM organization operates.

**The core idea is simple: turn GTM from a collection of people, documents and disconnected tools into a continuously learning system that can execute work across the entire customer lifecycle.**
