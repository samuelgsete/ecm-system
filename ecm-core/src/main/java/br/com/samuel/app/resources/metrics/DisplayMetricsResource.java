package br.com.samuel.app.resources.metrics;

import java.util.LinkedList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.samuel.app.usecases.metrics.DisplayMetrics;
import br.com.samuel.app.usecases.metrics.Metric;

@RestController
@RequestMapping("/metrics")
public class DisplayMetricsResource {
    
    @Autowired
    private DisplayMetrics displayMetrics;

    @GetMapping("/display")
    public ResponseEntity<LinkedList<Metric>> run() {
        return ResponseEntity.ok(displayMetrics.run());
    }
}