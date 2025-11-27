import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, AlertTriangle, CheckCircle, ArrowRight, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface Question {
  id: number;
  question: string;
  options: {
    value: string;
    label: string;
    score: number;
    risk: "low" | "medium" | "high";
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "How often do you update your social media privacy settings?",
    options: [
      { value: "a", label: "Never - I use default settings", score: 0, risk: "high" },
      { value: "b", label: "Rarely - Maybe once a year", score: 1, risk: "medium" },
      { value: "c", label: "Sometimes - Every few months", score: 2, risk: "medium" },
      { value: "d", label: "Regularly - Every month", score: 3, risk: "low" },
    ],
  },
  {
    id: 2,
    question: "Do you use the same password for multiple accounts?",
    options: [
      { value: "a", label: "Yes, for most accounts", score: 0, risk: "high" },
      { value: "b", label: "Yes, for some accounts", score: 1, risk: "medium" },
      { value: "c", label: "No, I use different passwords", score: 2, risk: "low" },
      { value: "d", label: "No, and I use a password manager", score: 3, risk: "low" },
    ],
  },
  {
    id: 3,
    question: "How do you typically respond to unknown messages or friend requests?",
    options: [
      { value: "a", label: "I usually respond and accept them", score: 0, risk: "high" },
      { value: "b", label: "I sometimes respond to interesting messages", score: 1, risk: "medium" },
      { value: "c", label: "I rarely respond to unknown contacts", score: 2, risk: "medium" },
      { value: "d", label: "I never respond without verifying first", score: 3, risk: "low" },
    ],
  },
  {
    id: 4,
    question: "Do you enable two-factor authentication on your important accounts?",
    options: [
      { value: "a", label: "No, I don't know what it is", score: 0, risk: "high" },
      { value: "b", label: "No, it seems too complicated", score: 1, risk: "high" },
      { value: "c", label: "Yes, on some accounts", score: 2, risk: "medium" },
      { value: "d", label: "Yes, on all important accounts", score: 3, risk: "low" },
    ],
  },
  {
    id: 5,
    question: "How do you handle suspicious links or attachments?",
    options: [
      { value: "a", label: "I click them to see what they are", score: 0, risk: "high" },
      { value: "b", label: "I might click if it looks interesting", score: 1, risk: "high" },
      { value: "c", label: "I avoid clicking but may preview them", score: 2, risk: "medium" },
      { value: "d", label: "I never click unknown links/attachments", score: 3, risk: "low" },
    ],
  },
  {
    id: 6,
    question: "How often do you backup your important data?",
    options: [
      { value: "a", label: "Never", score: 0, risk: "high" },
      { value: "b", label: "Rarely - Maybe once a year", score: 1, risk: "medium" },
      { value: "c", label: "Sometimes - Every few months", score: 2, risk: "medium" },
      { value: "d", label: "Regularly - Weekly or daily", score: 3, risk: "low" },
    ],
  },
];

const SafetyAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const { toast } = useToast();

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion]: value });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    let riskLevels: string[] = [];

    questions.forEach((question, index) => {
      const answer = answers[index];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
          riskLevels.push(option.risk);
        }
      }
    });

    const maxScore = questions.length * 3;
    const percentage = (totalScore / maxScore) * 100;

    let riskLevel: "low" | "medium" | "high";
    let riskColor: string;
    let recommendations: string[];

    if (percentage >= 80) {
      riskLevel = "low";
      riskColor = "text-green-600";
      recommendations = [
        "Your digital safety practices are excellent!",
        "Continue to stay updated on new security threats",
        "Consider sharing your knowledge with others",
        "Keep your security measures up to date",
      ];
    } else if (percentage >= 50) {
      riskLevel = "medium";
      riskColor = "text-yellow-600";
      recommendations = [
        "Your digital safety could be improved",
        "Enable two-factor authentication on important accounts",
        "Use different passwords for each account",
        "Update your privacy settings regularly",
        "Be more cautious with unknown messages",
      ];
    } else {
      riskLevel = "high";
      riskColor = "text-red-600";
      recommendations = [
        "Your digital safety is at high risk",
        "Immediately change passwords for important accounts",
        "Enable two-factor authentication everywhere possible",
        "Review and update all privacy settings",
        "Be extremely cautious with online interactions",
        "Consider seeking professional help for digital security",
        "Backup important data immediately",
      ];
    }

    return {
      score: totalScore,
      percentage: Math.round(percentage),
      riskLevel,
      riskColor,
      recommendations,
    };
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
  };

  if (showResults) {
    const results = calculateResults();
    
    return (
      <div className="w-full py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto max-w-3xl"
          >
            <Card className="shadow-xl">
              <CardHeader className="text-center pb-6">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  {results.riskLevel === "low" ? (
                    <CheckCircle className="h-8 w-8 text-green-600" />
                  ) : results.riskLevel === "medium" ? (
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                  ) : (
                    <AlertTriangle className="h-8 w-8 text-red-600" />
                  )}
                </div>
                <CardTitle className="text-3xl font-bold">
                  Your Digital Safety Assessment Results
                </CardTitle>
                <p className="text-lg text-muted-foreground mt-2">
                  Score: {results.score}/{questions.length * 3} ({results.percentage}%)
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className={`text-2xl font-bold ${results.riskColor}`}>
                    {results.riskLevel === "low" ? "Low Risk" : 
                     results.riskLevel === "medium" ? "Medium Risk" : "High Risk"}
                  </div>
                  <p className="text-muted-foreground mt-2">
                    Your digital safety level is currently at <strong>{results.riskLevel} risk</strong>
                  </p>
                </div>

                <div className="bg-muted/50 p-6 rounded-lg">
                  <h3 className="font-semibold mb-4 flex items-center gap-2">
                    <Shield className="h-5 w-5" />
                    Recommendations for You:
                  </h3>
                  <ul className="space-y-2">
                    {results.recommendations.map((rec, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                        {rec}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col gap-3 pt-4">
                  <Button onClick={resetAssessment} variant="outline" className="w-full">
                    Retake Assessment
                  </Button>
                  <div className="grid gap-3 md:grid-cols-2">
                    <Link to="/safety-tools">
                      <Button className="w-full">
                        Explore Safety Tools
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                    <Link to="/resources">
                      <Button variant="secondary" className="w-full">
                        Get Help & Resources
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="w-full py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 text-center"
        >
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Digital Safety Assessment</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A quick 2-minute assessment to evaluate your digital safety practices and identify potential risks.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mx-auto max-w-3xl mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Question {currentQuestion + 1} of {questions.length}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div
              className="bg-primary h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="mx-auto max-w-3xl"
        >
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">
                {question.question}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup
                value={answers[currentQuestion] || ""}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {question.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer py-2 px-3 rounded-md hover:bg-muted/50 transition-colors"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex justify-between mt-8">
                <Button
                  variant="outline"
                  onClick={prevQuestion}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!answers[currentQuestion]}
                >
                  {currentQuestion === questions.length - 1 ? "See Results" : "Next"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default SafetyAssessment;